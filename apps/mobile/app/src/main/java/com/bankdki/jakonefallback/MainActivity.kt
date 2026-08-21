package com.bankdki.jakonefallback

import android.app.Activity
import android.os.Bundle
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : Activity() {
    private lateinit var account: EditText
    private lateinit var output: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val content = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(32, 32, 32, 32)
        }
        val scroll = ScrollView(this).apply { addView(content) }

        content.addView(TextView(this).apply {
            text = "JakOne Day 7 — Mobile CI/CD Fallback\nAPI: ${BuildConfig.API_BASE_URL}"
            textSize = 20f
        })

        account = EditText(this).apply {
            hint = "Account number"
            setText("DKI-1029384")
        }
        content.addView(account)

        content.addView(button("Health") { request("GET", "/api/v1/health") })
        content.addView(button("Get Account") { request("GET", "/api/v1/accounts/${account.text}") })
        content.addView(button("Deposit 50,000") {
            request("POST", "/api/v1/accounts/${account.text}/transact", """{"type":"DEPOSIT","channel":"TRANSFER","amount":50000}""")
        })
        content.addView(button("Mutations") { request("GET", "/api/v1/accounts/${account.text}/mutations") })

        output = TextView(this).apply {
            text = "Ready."
            setPadding(0, 24, 0, 0)
            setTextIsSelectable(true)
        }
        content.addView(output, ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT))
        setContentView(scroll)
    }

    private fun button(label: String, action: () -> Unit) = Button(this).apply {
        text = label
        setOnClickListener { action() }
    }

    private fun request(method: String, path: String, body: String? = null) {
        output.text = "$method $path ..."
        Thread {
            try {
                val conn = (URL(BuildConfig.API_BASE_URL + path).openConnection() as HttpURLConnection).apply {
                    requestMethod = method
                    connectTimeout = 5000
                    readTimeout = 5000
                    setRequestProperty("Content-Type", "application/json")
                    if (body != null) {
                        doOutput = true
                        outputStream.use { it.write(body.toByteArray()) }
                    }
                }
                val status = conn.responseCode
                val stream = if (status in 200..399) conn.inputStream else conn.errorStream
                val response = stream?.bufferedReader()?.use { it.readText() } ?: ""
                runOnUiThread { output.text = "HTTP $status\n$response" }
                conn.disconnect()
            } catch (e: Exception) {
                runOnUiThread { output.text = "ERROR\n${e.message}" }
            }
        }.start()
    }
}
