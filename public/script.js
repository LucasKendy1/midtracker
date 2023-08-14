header = w.Header()
header.Add("Access-Control-Allow-Origin", "*")
header.Add("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
header.Add("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

if (r.Method=='OPTIONS'){
    w.WriteHeader(http.StatusOK)
    return
}