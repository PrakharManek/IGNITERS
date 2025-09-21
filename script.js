// Digital Health Management System for Migrant Workers in Kerala
// Aligned with UN Sustainable Development Goals

// Global variables
let currentLanguage = 'en';
let healthData = {
    vitals: [],
    medications: [],
    symptoms: [],
    profile: null
};

// Language translations
const translations = {
    en: {
        'hero-title': 'Digital Health Management for Migrant Workers',
        'hero-subtitle': 'Empowering migrant workers in Kerala with accessible, sustainable healthcare solutions aligned with UN Sustainable Development Goals',
        'register-now': 'Register Now',
        'learn-more': 'Learn More',
        'services-title': 'Our Health Services',
        'services-subtitle': 'Comprehensive healthcare solutions designed for migrant workers',
        'service-1-title': 'Health Registration',
        'service-1-desc': 'Register your health profile and access personalized healthcare services',
        'service-2-title': 'Health Tracking',
        'service-2-desc': 'Monitor your health metrics and track medical history',
        'service-3-title': 'Emergency Services',
        'service-3-desc': 'Quick access to emergency healthcare and SOS features',
        'service-4-title': 'Health Education',
        'service-4-desc': 'Learn about preventive healthcare and healthy living',
        'service-5-title': 'Multilingual Support',
        'service-5-desc': 'Access services in your preferred language',
        'service-6-title': 'Mobile Health',
        'service-6-desc': 'Offline-capable mobile health solutions',
        'tracker-title': 'Health Tracker Dashboard',
        'vitals-title': 'Vital Signs',
        'blood-pressure': 'Blood Pressure',
        'heart-rate': 'Heart Rate',
        'temperature': 'Temperature',
        'save-vitals': 'Save Vitals',
        'medications-title': 'Medications',
        'medication-name': 'Medication Name',
        'dosage': 'Dosage',
        'frequency': 'Frequency',
        'once-daily': 'Once Daily',
        'twice-daily': 'Twice Daily',
        'three-times': 'Three Times',
        'as-needed': 'As Needed',
        'add-medication': 'Add Medication',
        'symptoms-title': 'Symptoms Log',
        'symptom-description': 'Symptom Description',
        'severity': 'Severity (1-10)',
        'log-symptom': 'Log Symptom',
        'emergency-title': 'Emergency Health Services',
        'emergency-call': 'Emergency Call',
        'emergency-call-desc': 'Direct access to emergency medical services',
        'call-now': 'Call Now',
        'nearest-hospital': 'Nearest Hospital',
        'nearest-hospital-desc': 'Find the closest medical facility',
        'find-hospital': 'Find Hospital',
        'telemedicine': 'Telemedicine',
        'telemedicine-desc': 'Connect with healthcare professionals online',
        'start-consultation': 'Start Consultation',
        'education-title': 'Health Education & Awareness',
        'preventive-care': 'Preventive Care',
        'preventive-care-desc': 'Learn about disease prevention and healthy habits',
        'nutrition': 'Nutrition Guide',
        'nutrition-desc': 'Healthy eating habits for migrant workers',
        'physical-activity': 'Physical Activity',
        'physical-activity-desc': 'Exercise routines for busy workers',
        'mental-health': 'Mental Health',
        'mental-health-desc': 'Managing stress and mental well-being',
        'profile-title': 'Your Health Profile',
        'personal-info': 'Personal Information',
        'full-name': 'Full Name',
        'age': 'Age',
        'phone': 'Phone Number',
        'emergency-contact': 'Emergency Contact',
        'address': 'Address in Kerala',
        'medical-history': 'Medical History',
        'save-profile': 'Save Profile',
        'health-stats': 'Health Statistics',
        'health-score': 'Health Score',
        'checkups': 'Checkups',
        'medications': 'Medications',
        'emergencies': 'Emergencies',
        'footer-title': 'Kerala Migrant Health',
        'footer-desc': 'Empowering migrant workers with accessible healthcare solutions aligned with UN Sustainable Development Goals.',
        'quick-links': 'Quick Links',
        'home': 'Home',
        'services': 'Services',
        'emergency': 'Emergency',
        'education': 'Education',
        'contact-info': 'Contact Information',
        'sdg-alignment': 'SDG Alignment',
        'register-title': 'Register for Health Services',
        'language-preference': 'Language Preference',
        'worker-type': 'Type of Work',
        'construction': 'Construction',
        'agriculture': 'Agriculture',
        'domestic': 'Domestic Work',
        'other': 'Other',
        'complete-registration': 'Complete Registration'
    },
    ml: {
        'hero-title': 'കേരളത്തിലെ കുടിയേറ്റ തൊഴിലാളികൾക്കുള്ള ഡിജിറ്റൽ ആരോഗ്യ മാനേജ്മെന്റ്',
        'hero-subtitle': 'ഐക്യരാഷ്ട്രസഭയുടെ സുസ്ഥിര വികസന ലക്ഷ്യങ്ങളുമായി പൊരുത്തപ്പെടുത്തി കേരളത്തിലെ കുടിയേറ്റ തൊഴിലാളികൾക്ക് പ്രാപ്യമായ, സുസ്ഥിരമായ ആരോഗ്യ പരിപാലന പരിഹാരങ്ങൾ നൽകുന്നു',
        'register-now': 'ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക',
        'learn-more': 'കൂടുതൽ അറിയുക',
        'services-title': 'ഞങ്ങളുടെ ആരോഗ്യ സേവനങ്ങൾ',
        'services-subtitle': 'കുടിയേറ്റ തൊഴിലാളികൾക്കായി രൂപകൽപ്പന ചെയ്ത സമഗ്ര ആരോഗ്യ പരിപാലന പരിഹാരങ്ങൾ',
        'service-1-title': 'ആരോഗ്യ രജിസ്ട്രേഷൻ',
        'service-1-desc': 'നിങ്ങളുടെ ആരോഗ്യ പ്രൊഫൈൽ രജിസ്റ്റർ ചെയ്ത് വ്യക്തിഗത ആരോഗ്യ പരിപാലന സേവനങ്ങൾ ലഭിക്കുക',
        'service-2-title': 'ആരോഗ്യ ട്രാക്കിംഗ്',
        'service-2-desc': 'നിങ്ങളുടെ ആരോഗ്യ മെട്രിക്സ് നിരീക്ഷിക്കുകയും മെഡിക്കൽ ചരിത്രം ട്രാക്ക് ചെയ്യുകയും ചെയ്യുക',
        'service-3-title': 'അടിയന്തര സേവനങ്ങൾ',
        'service-3-desc': 'അടിയന്തര ആരോഗ്യ പരിപാലനത്തിലേക്കും SOS സവിശേഷതകളിലേക്കും വേഗത്തിലുള്ള പ്രവേശനം',
        'service-4-title': 'ആരോഗ്യ വിദ്യാഭ്യാസം',
        'service-4-desc': 'പ്രതിരോധ ആരോഗ്യ പരിപാലനത്തെയും ആരോഗ്യകരമായ ജീവിതത്തെയും കുറിച്ച് പഠിക്കുക',
        'service-5-title': 'ബഹുഭാഷാ പിന്തുണ',
        'service-5-desc': 'നിങ്ങളുടെ പ്രിയപ്പെട്ട ഭാഷയിൽ സേവനങ്ങൾ ലഭിക്കുക',
        'service-6-title': 'മൊബൈൽ ആരോഗ്യം',
        'service-6-desc': 'ഓഫ്ലൈൻ-സഹായ മൊബൈൽ ആരോഗ്യ പരിഹാരങ്ങൾ'
    },
    hi: {
        'hero-title': 'केरल में प्रवासी श्रमिकों के लिए डिजिटल स्वास्थ्य प्रबंधन',
        'hero-subtitle': 'संयुक्त राष्ट्र के सतत विकास लक्ष्यों के साथ संरेखित सुलभ, सतत स्वास्थ्य सेवा समाधानों के साथ केरल में प्रवासी श्रमिकों को सशक्त बनाना',
        'register-now': 'अभी पंजीकरण करें',
        'learn-more': 'और जानें',
        'services-title': 'हमारी स्वास्थ्य सेवाएं',
        'services-subtitle': 'प्रवासी श्रमिकों के लिए डिज़ाइन की गई व्यापक स्वास्थ्य सेवा समाधान',
        'service-1-title': 'स्वास्थ्य पंजीकरण',
        'service-1-desc': 'अपना स्वास्थ्य प्रोफ़ाइल पंजीकृत करें और व्यक्तिगत स्वास्थ्य सेवाओं तक पहुंचें',
        'service-2-title': 'स्वास्थ्य ट्रैकिंग',
        'service-2-desc': 'अपने स्वास्थ्य मेट्रिक्स की निगरानी करें और चिकित्सा इतिहास ट्रैक करें',
        'service-3-title': 'आपातकालीन सेवाएं',
        'service-3-desc': 'आपातकालीन स्वास्थ्य सेवा और SOS सुविधाओं तक त्वरित पहुंच',
        'service-4-title': 'स्वास्थ्य शिक्षा',
        'service-4-desc': 'निवारक स्वास्थ्य देखभाल और स्वस्थ जीवन के बारे में जानें',
        'service-5-title': 'बहुभाषी सहायता',
        'service-5-desc': 'अपनी पसंदीदा भाषा में सेवाओं तक पहुंचें',
        'service-6-title': 'मोबाइल स्वास्थ्य',
        'service-6-desc': 'ऑफ़लाइन-सक्षम मोबाइल स्वास्थ्य समाधान'
    },
    ta: {
        'hero-title': 'கேரளாவில் குடியேறிய தொழிலாளர்களுக்கான டிஜிட்டல் சுகாதார மேலாண்மை',
        'hero-subtitle': 'ஐக்கிய நாடுகளின் நிலையான வளர்ச்சி இலக்குகளுடன் இணைந்து அணுகக்கூடிய, நிலையான சுகாதார பராமரிப்பு தீர்வுகளுடன் கேரளாவில் குடியேறிய தொழிலாளர்களை வலுப்படுத்துதல்',
        'register-now': 'இப்போது பதிவு செய்யுங்கள்',
        'learn-more': 'மேலும் அறியுங்கள்',
        'services-title': 'எங்கள் சுகாதார சேவைகள்',
        'services-subtitle': 'குடியேறிய தொழிலாளர்களுக்காக வடிவமைக்கப்பட்ட விரிவான சுகாதார பராமரிப்பு தீர்வுகள்',
        'service-1-title': 'சுகாதார பதிவு',
        'service-1-desc': 'உங்கள் சுகாதார சுயவிவரத்தை பதிவு செய்து தனிப்பட்ட சுகாதார பராமரிப்பு சேவைகளை அணுகவும்',
        'service-2-title': 'சுகாதார கண்காணிப்பு',
        'service-2-desc': 'உங்கள் சுகாதார அளவீடுகளை கண்காணித்து மருத்துவ வரலாற்றை கண்காணிக்கவும்',
        'service-3-title': 'அவசர சேவைகள்',
        'service-3-desc': 'அவசர சுகாதார பராமரிப்பு மற்றும் SOS அம்சங்களுக்கு விரைவான அணுகல்',
        'service-4-title': 'சுகாதார கல்வி',
        'service-4-desc': 'தடுப்பு சுகாதார பராமரிப்பு மற்றும் ஆரோக்கியமான வாழ்க்கை பற்றி அறியுங்கள்',
        'service-5-title': 'பன்மொழி ஆதரவு',
        'service-5-desc': 'உங்கள் விருப்பமான மொழியில் சேவைகளை அணுகவும்',
        'service-6-title': 'மொபைல் சுகாதாரம்',
        'service-6-desc': 'ஆஃப்லைன்-திறன் கொண்ட மொபைல் சுகாதார தீர்வுகள்'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadHealthData();
    setupEventListeners();
    updateLanguage();
});

// Initialize application
function initializeApp() {
    console.log('Kerala Migrant Health System initialized');
    console.log('Aligned with UN SDGs: 3 (Good Health), 10 (Reduced Inequalities), 17 (Partnerships)');
    
    // Check for service worker support for offline functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('Service Worker registered'))
            .catch(error => console.log('Service Worker registration failed'));
    }
}

// Setup event listeners
function setupEventListeners() {
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguage();
        });
    }

    // Severity slider
    const severitySlider = document.getElementById('severity');
    const severityValue = document.getElementById('severityValue');
    if (severitySlider && severityValue) {
        severitySlider.addEventListener('input', function() {
            severityValue.textContent = this.value;
        });
    }

    // Profile form
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveProfile();
        });
    }

    // Registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            completeRegistration();
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Open registration modal
function openRegistration() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close registration modal
function closeRegistration() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Complete registration
function completeRegistration() {
    const formData = {
        fullName: document.getElementById('regFullName').value,
        phone: document.getElementById('regPhone').value,
        language: document.getElementById('regLanguage').value,
        workerType: document.getElementById('workerType').value
    };

    // Save to localStorage
    localStorage.setItem('migrantHealthProfile', JSON.stringify(formData));
    
    // Update current language
    currentLanguage = formData.language;
    updateLanguage();
    
    // Close modal
    closeRegistration();
    
    // Show success message
    showNotification('Registration completed successfully!', 'success');
    
    // Update profile section
    loadHealthData();
}

// Save profile
function saveProfile() {
    const profileData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        emergencyContact: document.getElementById('emergencyContact').value,
        address: document.getElementById('address').value,
        medicalHistory: document.getElementById('medicalHistory').value,
        lastUpdated: new Date().toISOString()
    };

    // Save to localStorage
    localStorage.setItem('migrantHealthProfile', JSON.stringify(profileData));
    
    // Update health data
    healthData.profile = profileData;
    
    showNotification('Profile saved successfully!', 'success');
    updateHealthStats();
}

// Save vitals
function saveVitals() {
    const vitals = {
        bloodPressure: document.getElementById('bloodPressure').value,
        heartRate: document.getElementById('heartRate').value,
        temperature: document.getElementById('temperature').value,
        timestamp: new Date().toISOString()
    };

    // Validate vitals
    if (!vitals.bloodPressure || !vitals.heartRate || !vitals.temperature) {
        showNotification('Please fill in all vital signs', 'error');
        return;
    }

    // Add to health data
    healthData.vitals.push(vitals);
    
    // Save to localStorage
    localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
    
    // Clear form
    document.getElementById('bloodPressure').value = '';
    document.getElementById('heartRate').value = '';
    document.getElementById('temperature').value = '';
    
    showNotification('Vitals saved successfully!', 'success');
    updateHealthStats();
}

// Add medication
function addMedication() {
    const medication = {
        name: document.getElementById('medicationName').value,
        dosage: document.getElementById('dosage').value,
        frequency: document.getElementById('frequency').value,
        addedDate: new Date().toISOString()
    };

    if (!medication.name || !medication.dosage) {
        showNotification('Please fill in medication name and dosage', 'error');
        return;
    }

    // Add to health data
    healthData.medications.push(medication);
    
    // Save to localStorage
    localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
    
    // Clear form
    document.getElementById('medicationName').value = '';
    document.getElementById('dosage').value = '';
    document.getElementById('frequency').value = 'once-daily';
    
    showNotification('Medication added successfully!', 'success');
    updateHealthStats();
}

// Log symptom
function logSymptom() {
    const symptom = {
        description: document.getElementById('symptomDescription').value,
        severity: document.getElementById('severity').value,
        timestamp: new Date().toISOString()
    };

    if (!symptom.description) {
        showNotification('Please describe your symptom', 'error');
        return;
    }

    // Add to health data
    healthData.symptoms.push(symptom);
    
    // Save to localStorage
    localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
    
    // Clear form
    document.getElementById('symptomDescription').value = '';
    document.getElementById('severity').value = '5';
    document.getElementById('severityValue').textContent = '5';
    
    showNotification('Symptom logged successfully!', 'success');
    updateHealthStats();
}

// Make emergency call
function makeEmergencyCall() {
    // In a real application, this would integrate with telephony services
    const emergencyNumber = '108'; // Kerala emergency number
    showNotification(`Calling emergency services: ${emergencyNumber}`, 'info');
    
    // Simulate emergency call
    setTimeout(() => {
        showNotification('Emergency services contacted. Help is on the way!', 'success');
    }, 2000);
}

// Find nearest hospital
function findNearestHospital() {
    // In a real application, this would use geolocation and hospital database
    showNotification('Finding nearest hospitals...', 'info');
    
    // Simulate hospital search
    setTimeout(() => {
        const hospitals = [
            'Government Medical College, Thiruvananthapuram',
            'Amrita Institute of Medical Sciences, Kochi',
            'Kozhikode Medical College, Kozhikode'
        ];
        
        const randomHospital = hospitals[Math.floor(Math.random() * hospitals.length)];
        showNotification(`Nearest hospital: ${randomHospital}`, 'success');
    }, 1500);
}

// Start telemedicine
function startTelemedicine() {
    showNotification('Connecting to healthcare professional...', 'info');
    
    // Simulate telemedicine connection
    setTimeout(() => {
        showNotification('Connected! You can now speak with a doctor.', 'success');
    }, 2000);
}

// Open education module
function openEducationModule(module) {
    const modules = {
        'preventive': 'Preventive Care Module',
        'nutrition': 'Nutrition Guide Module',
        'exercise': 'Physical Activity Module',
        'mental-health': 'Mental Health Module'
    };
    
    showNotification(`Opening ${modules[module]}...`, 'info');
    
    // In a real application, this would open detailed education content
    setTimeout(() => {
        showNotification(`${modules[module]} loaded successfully!`, 'success');
    }, 1000);
}

// Load health data from localStorage
function loadHealthData() {
    const savedData = localStorage.getItem('migrantHealthData');
    if (savedData) {
        healthData = JSON.parse(savedData);
    }
    
    const savedProfile = localStorage.getItem('migrantHealthProfile');
    if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        healthData.profile = profile;
        
        // Populate profile form
        if (document.getElementById('fullName')) {
            document.getElementById('fullName').value = profile.fullName || '';
            document.getElementById('age').value = profile.age || '';
            document.getElementById('phone').value = profile.phone || '';
            document.getElementById('emergencyContact').value = profile.emergencyContact || '';
            document.getElementById('address').value = profile.address || '';
            document.getElementById('medicalHistory').value = profile.medicalHistory || '';
        }
    }
    
    updateHealthStats();
}

// Load demo data
async function loadDemoData() {
    try {
        const response = await fetch('demo-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const demoData = await response.json();
        
        // Load demo profile
        if (demoData.demoProfile) {
            healthData.profile = demoData.demoProfile;
            localStorage.setItem('migrantHealthProfile', JSON.stringify(demoData.demoProfile));
            
            // Populate profile form
            if (document.getElementById('fullName')) {
                document.getElementById('fullName').value = demoData.demoProfile.fullName || '';
                document.getElementById('age').value = demoData.demoProfile.age || '';
                document.getElementById('phone').value = demoData.demoProfile.phone || '';
                document.getElementById('emergencyContact').value = demoData.demoProfile.emergencyContact || '';
                document.getElementById('address').value = demoData.demoProfile.address || '';
                document.getElementById('medicalHistory').value = demoData.demoProfile.medicalHistory || '';
            }
        }
        
        // Load demo vitals
        if (demoData.demoVitals) {
            healthData.vitals = demoData.demoVitals;
        }
        
        // Load demo medications
        if (demoData.demoMedications) {
            healthData.medications = demoData.demoMedications;
        }
        
        // Load demo symptoms
        if (demoData.demoSymptoms) {
            healthData.symptoms = demoData.demoSymptoms;
        }
        
        // Save all demo data
        localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
        
        // Update language if demo profile has one
        if (demoData.demoProfile.language) {
            currentLanguage = demoData.demoProfile.language;
            document.getElementById('languageSelect').value = currentLanguage;
            updateLanguage();
        }
        
        updateHealthStats();
        showNotification('Demo data loaded successfully!', 'success');
        
        // Scroll to profile section to show loaded data
        scrollToSection('profile');
        
    } catch (error) {
        console.error('Error loading demo data:', error);
        
        // If fetch fails due to CORS or file access issues, load hardcoded demo data
        if (error.message.includes('fetch') || error.message.includes('CORS')) {
            loadHardcodedDemoData();
        } else {
            showNotification('Error loading demo data. Please check if demo-data.json exists.', 'error');
        }
    }
}

// Fallback: Load hardcoded demo data when file access fails
function loadHardcodedDemoData() {
    const hardcodedDemoData = {
        demoProfile: {
            fullName: "Rajesh Kumar",
            age: 32,
            phone: "+91 98765 43210",
            emergencyContact: "+91 98765 43211",
            address: "Construction Site, Technopark, Thiruvananthapuram, Kerala",
            medicalHistory: "No known allergies. Previous minor injury to left hand in 2022.",
            workerType: "construction",
            language: "hi",
            lastUpdated: "2024-01-15T10:30:00.000Z"
        },
        demoVitals: [
            {
                bloodPressure: "120/80",
                heartRate: 72,
                temperature: 98.6,
                timestamp: "2024-01-15T08:00:00.000Z"
            },
            {
                bloodPressure: "118/78",
                heartRate: 75,
                temperature: 98.4,
                timestamp: "2024-01-14T08:00:00.000Z"
            },
            {
                bloodPressure: "122/82",
                heartRate: 70,
                temperature: 98.8,
                timestamp: "2024-01-13T08:00:00.000Z"
            }
        ],
        demoMedications: [
            {
                name: "Paracetamol",
                dosage: "500mg",
                frequency: "as-needed",
                addedDate: "2024-01-10T10:00:00.000Z"
            },
            {
                name: "Multivitamin",
                dosage: "1 tablet",
                frequency: "once-daily",
                addedDate: "2024-01-05T10:00:00.000Z"
            }
        ],
        demoSymptoms: [
            {
                description: "Mild headache after long work hours",
                severity: "4",
                timestamp: "2024-01-15T18:30:00.000Z"
            },
            {
                description: "Slight fatigue in the evening",
                severity: "3",
                timestamp: "2024-01-14T19:00:00.000Z"
            }
        ]
    };
    
    // Load hardcoded demo profile
    if (hardcodedDemoData.demoProfile) {
        healthData.profile = hardcodedDemoData.demoProfile;
        localStorage.setItem('migrantHealthProfile', JSON.stringify(hardcodedDemoData.demoProfile));
        
        // Populate profile form
        if (document.getElementById('fullName')) {
            document.getElementById('fullName').value = hardcodedDemoData.demoProfile.fullName || '';
            document.getElementById('age').value = hardcodedDemoData.demoProfile.age || '';
            document.getElementById('phone').value = hardcodedDemoData.demoProfile.phone || '';
            document.getElementById('emergencyContact').value = hardcodedDemoData.demoProfile.emergencyContact || '';
            document.getElementById('address').value = hardcodedDemoData.demoProfile.address || '';
            document.getElementById('medicalHistory').value = hardcodedDemoData.demoProfile.medicalHistory || '';
        }
    }
    
    // Load hardcoded demo vitals
    if (hardcodedDemoData.demoVitals) {
        healthData.vitals = hardcodedDemoData.demoVitals;
    }
    
    // Load hardcoded demo medications
    if (hardcodedDemoData.demoMedications) {
        healthData.medications = hardcodedDemoData.demoMedications;
    }
    
    // Load hardcoded demo symptoms
    if (hardcodedDemoData.demoSymptoms) {
        healthData.symptoms = hardcodedDemoData.demoSymptoms;
    }
    
    // Save all demo data
    localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
    
    // Update language if demo profile has one
    if (hardcodedDemoData.demoProfile.language) {
        currentLanguage = hardcodedDemoData.demoProfile.language;
        document.getElementById('languageSelect').value = currentLanguage;
        updateLanguage();
    }
    
    updateHealthStats();
    showNotification('Demo data loaded successfully! (Using fallback data)', 'success');
    
    // Scroll to profile section to show loaded data
    scrollToSection('profile');
}

// Clear all data
function clearAllData() {
    if (confirm('Are you sure you want to clear all health data? This action cannot be undone.')) {
        localStorage.removeItem('migrantHealthData');
        localStorage.removeItem('migrantHealthProfile');
        healthData = {
            vitals: [],
            medications: [],
            symptoms: [],
            profile: null
        };
        
        // Clear forms
        if (document.getElementById('fullName')) {
            document.getElementById('fullName').value = '';
            document.getElementById('age').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('emergencyContact').value = '';
            document.getElementById('address').value = '';
            document.getElementById('medicalHistory').value = '';
        }
        
        updateHealthStats();
        showNotification('All data cleared successfully!', 'success');
    }
}

// Update health statistics
function updateHealthStats() {
    // Calculate health score based on various factors
    let healthScore = 85; // Base score
    
    // Adjust based on recent vitals
    if (healthData.vitals.length > 0) {
        const recentVitals = healthData.vitals[healthData.vitals.length - 1];
        if (recentVitals.heartRate) {
            const hr = parseInt(recentVitals.heartRate);
            if (hr >= 60 && hr <= 100) {
                healthScore += 5;
            } else if (hr < 60 || hr > 100) {
                healthScore -= 10;
            }
        }
    }
    
    // Adjust based on symptoms
    const recentSymptoms = healthData.symptoms.filter(s => {
        const symptomDate = new Date(s.timestamp);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return symptomDate > weekAgo;
    });
    
    if (recentSymptoms.length > 3) {
        healthScore -= 15;
    } else if (recentSymptoms.length > 0) {
        healthScore -= 5;
    }
    
    // Update UI
    const healthScoreElement = document.getElementById('healthScore');
    if (healthScoreElement) {
        healthScoreElement.textContent = Math.max(0, Math.min(100, healthScore));
    }
    
    const checkupsElement = document.getElementById('checkupsCompleted');
    if (checkupsElement) {
        checkupsElement.textContent = healthData.vitals.length;
    }
    
    const medicationsElement = document.getElementById('medicationsActive');
    if (medicationsElement) {
        medicationsElement.textContent = healthData.medications.length;
    }
    
    const emergenciesElement = document.getElementById('emergencyCalls');
    if (emergenciesElement) {
        emergenciesElement.textContent = 0; // This would be tracked separately
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        max-width: 300px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    const colors = {
        'success': '#4CAF50',
        'error': '#f44336',
        'info': '#2196F3',
        'warning': '#ff9800'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Export health data (for backup/sharing)
function exportHealthData() {
    const dataStr = JSON.stringify(healthData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'migrant-health-data.json';
    link.click();
}

// Import health data
function importHealthData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            healthData = importedData;
            localStorage.setItem('migrantHealthData', JSON.stringify(healthData));
            loadHealthData();
            showNotification('Health data imported successfully!', 'success');
        } catch (error) {
            showNotification('Error importing health data', 'error');
        }
    };
    reader.readAsText(file);
}

// Offline functionality
function setupOfflineSupport() {
    // Check if we're online
    function updateOnlineStatus() {
        if (navigator.onLine) {
            showNotification('Back online - data will be synced', 'success');
        } else {
            showNotification('You are offline - data will be saved locally', 'warning');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

// Initialize offline support
setupOfflineSupport();

// PWA installation prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or banner
    showNotification('Install this app for better experience!', 'info');
});

// Install PWA
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                showNotification('App installed successfully!', 'success');
            }
            deferredPrompt = null;
        });
    }
}

// Analytics and reporting (SDG alignment tracking)
function trackSDGProgress() {
    const sdgMetrics = {
        sdg3: {
            healthAccess: healthData.profile ? 1 : 0,
            healthEducation: healthData.symptoms.length > 0 ? 1 : 0,
            preventiveCare: healthData.vitals.length > 0 ? 1 : 0
        },
        sdg10: {
            reducedInequalities: healthData.profile ? 1 : 0,
            inclusiveServices: currentLanguage !== 'en' ? 1 : 0
        },
        sdg17: {
            partnerships: 1, // This system represents a partnership
            dataSharing: healthData.vitals.length > 0 ? 1 : 0
        }
    };
    
    console.log('SDG Progress Tracking:', sdgMetrics);
    return sdgMetrics;
}

// Track SDG progress on page load
setTimeout(trackSDGProgress, 1000);
