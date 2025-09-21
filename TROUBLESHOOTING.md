# 🔧 Troubleshooting Guide

## Common Error Messages and Solutions

### ❌ "Error loading demo data" or CORS Error

**Problem**: Browser blocks loading `demo-data.json` due to CORS restrictions when opening HTML file directly.

**Solutions**:

#### Option 1: Use Local Web Server (Recommended)
```bash
# Navigate to your project folder
cd "c:\ved website"

# Start a local server
python -m http.server 8000
# OR
python3 -m http.server 8000
# OR
npx http-server
```

Then open: `http://localhost:8000`

#### Option 2: Use Fallback Data (Already Fixed!)
The system now automatically uses hardcoded demo data if file loading fails. Just click "Load Demo Data" and it will work!

#### Option 3: Browser Settings
- **Chrome**: Add `--allow-file-access-from-files` flag
- **Firefox**: Set `security.fileuri.strict_origin_policy` to `false` in about:config

### ❌ "Service Worker registration failed"

**Problem**: Service worker can't be registered when opening file directly.

**Solution**: Use a local web server (see Option 1 above).

### ❌ "Cannot read properties of null"

**Problem**: JavaScript trying to access elements before they're loaded.

**Solution**: The code now includes proper error checking and element existence validation.

### ❌ Language not switching

**Problem**: Language selector not working properly.

**Solution**: 
1. Make sure you're using a web server
2. Check browser console for errors
3. Try refreshing the page

## 🚀 Quick Fixes

### 1. Immediate Solution
- **Just click "Load Demo Data"** - it will now work with fallback data!
- The system automatically detects file access issues and uses hardcoded data

### 2. For Full Functionality
- Use a local web server (Python, Node.js, or any web server)
- This enables all PWA features and file loading

### 3. Browser Compatibility
- **Chrome**: Best support
- **Firefox**: Good support
- **Safari**: Good support
- **Edge**: Good support

## 📱 Mobile Testing

### Android
- Use Chrome browser
- Enable "Desktop site" if needed
- Install as PWA for best experience

### iOS
- Use Safari browser
- Add to Home Screen for PWA experience

## 🔍 Debug Information

### Check Console
1. Press F12 to open Developer Tools
2. Go to Console tab
3. Look for error messages
4. Check Network tab for failed requests

### Common Console Messages
- ✅ "Kerala Migrant Health System initialized" - System working
- ✅ "Demo data loaded successfully!" - Demo data working
- ❌ "CORS error" - Use web server
- ❌ "Service Worker registration failed" - Use web server

## 🛠️ Development Setup

### For Developers
```bash
# Install Node.js and use http-server
npm install -g http-server
cd "c:\ved website"
http-server -p 8000

# Or use Python
python -m http.server 8000

# Or use PHP
php -S localhost:8000
```

### File Structure Check
Make sure all files are in the same directory:
```
c:\ved website\
├── index.html
├── styles.css
├── script.js
├── sw.js
├── manifest.json
├── demo-data.json
└── README.md
```

## ✅ Verification Steps

1. **Open** `index.html` in browser
2. **Check** if page loads without errors
3. **Click** "Load Demo Data" button
4. **Verify** profile form gets populated
5. **Check** health statistics update
6. **Test** language switching

## 🆘 Still Having Issues?

### Contact Information
- **Email**: health@kerala.gov.in
- **Phone**: +91 471 123 4567

### Common Solutions
1. **Clear browser cache** and reload
2. **Try different browser**
3. **Use incognito/private mode**
4. **Check file permissions**
5. **Use web server instead of file://**

The system is designed to be robust and will work even with file access restrictions!
