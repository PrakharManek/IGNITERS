# How to Open and Use Demo Data

## 🚀 Quick Start

### Method 1: Using the Web Interface
1. **Open the application**: Open `index.html` in your web browser
2. **Navigate to Profile section**: Scroll down to the "Your Health Profile" section
3. **Click "Load Demo Data"**: You'll see a blue button labeled "Load Demo Data"
4. **View populated data**: The system will automatically fill in:
   - Personal information (Rajesh Kumar, 32 years old, construction worker)
   - Health statistics (3 vitals entries, 2 medications, 2 symptoms)
   - Language preference (Hindi)

### Method 2: Direct File Access
1. **Open demo-data.json**: You can directly open this file in any text editor
2. **View the structure**: The file contains:
   - `demoProfile`: Sample user profile
   - `demoVitals`: Sample vital signs data
   - `demoMedications`: Sample medication records
   - `demoSymptoms`: Sample symptom logs
   - `sdgMetrics`: SDG alignment tracking
   - `healthStatistics`: System usage statistics

## 📊 What Demo Data Contains

### Sample Profile
- **Name**: Rajesh Kumar
- **Age**: 32
- **Phone**: +91 98765 43210
- **Address**: Construction Site, Technopark, Thiruvananthapuram, Kerala
- **Worker Type**: Construction
- **Language**: Hindi
- **Medical History**: No known allergies, previous minor injury

### Sample Health Data
- **3 Vital Signs Entries**: Blood pressure, heart rate, temperature over 3 days
- **2 Medications**: Paracetamol (as needed) and Multivitamin (daily)
- **2 Symptoms**: Mild headache and fatigue

### SDG Metrics
- **SDG 3**: Health access and education tracking
- **SDG 10**: Reduced inequalities metrics
- **SDG 17**: Partnership and data sharing indicators

## 🔧 How to Use Demo Data

### Loading Demo Data
1. Click the **"Load Demo Data"** button in the Profile section
2. The system will:
   - Load all sample data into the application
   - Populate the profile form
   - Update health statistics
   - Switch language to Hindi (as per demo profile)
   - Show a success notification

### Viewing Loaded Data
1. **Profile Section**: See the filled form with Rajesh Kumar's information
2. **Health Statistics**: Updated numbers showing 3 checkups, 2 medications
3. **Health Tracker**: You can add new entries on top of the demo data
4. **Language**: Automatically switches to Hindi

### Clearing Data
1. Click the **"Clear All Data"** button (red button)
2. Confirm the action when prompted
3. All data will be removed and forms will be cleared

## 🎯 Demo Data Benefits

### For Testing
- **Quick Setup**: Instantly populate the system with realistic data
- **Feature Demonstration**: Show all features working with sample data
- **Language Testing**: Test multilingual functionality
- **SDG Tracking**: See how SDG metrics are calculated

### For Development
- **Data Structure**: Understand the expected data format
- **API Testing**: Test data loading and saving functionality
- **UI Testing**: Verify form population and display
- **Performance**: Test with realistic data volumes

## 🔄 Data Management

### Exporting Data
- Use the export functionality to save your current data
- Demo data can be exported as JSON for backup

### Importing Data
- You can import the demo-data.json file directly
- Or modify the demo-data.json and reload it

### Customization
- Edit `demo-data.json` to create your own sample data
- Modify names, addresses, medical history, etc.
- Add more vitals, medications, or symptoms

## 🚨 Important Notes

### Data Persistence
- Demo data is saved to browser's localStorage
- Data persists between browser sessions
- Use "Clear All Data" to reset completely

### File Requirements
- `demo-data.json` must be in the same directory as `index.html`
- Web server recommended for full functionality
- Some browsers may block local file access

### Browser Compatibility
- Works in all modern browsers
- Chrome, Firefox, Safari, Edge supported
- Mobile browsers fully supported

## 🎉 Next Steps

After loading demo data:
1. **Explore Features**: Try all the health tracking features
2. **Test Languages**: Switch between different languages
3. **Add New Data**: Add your own health entries
4. **Test Emergency**: Try emergency services features
5. **Education Modules**: Explore health education content

The demo data provides a complete working example of the Kerala Migrant Health System with realistic data that demonstrates all features and capabilities!
