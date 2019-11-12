import http from "k6/http";
import { check } from "k6";

export default function() {
    var randomId = Math.floor(Math.random() * 10000001);
    var base = "http://localhost:3020?id="
    var url = base + randomId
    check(http.get(url), {
        "is status 200": (r) => r.status === 200
    })
}

