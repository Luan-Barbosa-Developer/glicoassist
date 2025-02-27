test("GET to /api/v1/status should to 2000", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status")
    
    expect(response.status).toBe(200);
});