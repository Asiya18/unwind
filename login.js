document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // Basic validation
    if (!username || !password) {
      message.style.color = "red";
      message.textContent = "❌ Please fill in all fields!";
      return;
    }
  
    // TODO: Replace with actual backend authentication
    // This is for demo purposes only - never store credentials in frontend code
    if (username === "demo" && password === "demo123") {
      message.style.color = "green";
      message.textContent = "✅ Login Successful! Redirecting...";
      
      // Store login state (in production, use secure tokens)
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", username);
      
      setTimeout(() => window.location.href = "index.html", 1500);
    } else {
      message.style.color = "red";
      message.textContent = "❌ Invalid username or password!";
    }
  });
  