// Zid + jsDelivr Test Script
console.log('✅ SUCCESS! External script from jsDelivr is working on Zid!');
alert('🎉 jsDelivr works! Your external script loaded successfully.');

// Also show on page
(function() {
    var testDiv = document.createElement('div');
    testDiv.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:20px;border-radius:8px;z-index:99999;font-family:Arial;box-shadow:0 4px 6px rgba(0,0,0,0.3);';
    testDiv.innerHTML = '✅ jsDelivr is working!<br>External script loaded successfully.';
    document.body.appendChild(testDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(function() {
        testDiv.remove();
    }, 5000);
})();
