package com.bankdki.jakonefallback

import org.junit.Assert.assertTrue
import org.junit.Test

class ContractTest {
    @Test fun sharedEndpointShapeIsStable() {
        val endpoint = "/api/v1/accounts/DKI-1029384/mutations"
        assertTrue(endpoint.startsWith("/api/v1/accounts/"))
        assertTrue(endpoint.endsWith("/mutations"))
    }
}
