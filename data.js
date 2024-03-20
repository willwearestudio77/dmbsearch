const data = [
    {
        name: "All Services", slug: "all-services", href: "/services", searchTerms: [
            "all services",
            "healthcare services",
            "complete services"
        ]
    },
    {
        name: "Asthma", slug: "asthma", href: "/services/asthma", searchTerms: [
            "asthma",
            "respiratory health",
            "breathing problems",
            "Inhalers",
            "Ventolin",
        ]
    },
    {
        name: "General Sickness", slug: "general-sickness", href: "/services/general-sickness-and-pain", searchTerms: [
            "general sickness",
            "common illnesses",
            "health issues",
            "general",
            "general health",
            "common health",
            "Nausea and Vomiting",
            "Back Pain",
            "Migraine",
            "Haemorroids / Piles",
            "Ear Infection",
            "Throat Infection",
        ]
    },
    {
        name: "Cough, Cold & Flu", slug: "cough-cold-flu", href: "/services/cough-cold-and-flu", searchTerms: [
            "cough cold flu",
            "respiratory infections",
            "seasonal illnesses",
            "lungs",
            "Influenza",
            "influenza",
            "Flu Vaccine",
            "flu shot",
        ]
    },
    {
        name: "Allergy & Hay-fever", slug: "allergy-hay-fever", href: "/services/allergy-and-hayfever", searchTerms: [
            "allergy hay-fever",
            "allergic reactions",
            "pollen allergies",
            "Fexofenadine Tablets",
            "Rhinolast Nasal Spray",
            "Beclometasone Nasal Spray",
            "Dymista Nasal Spray",
        ]
    },
    {
        name: "Sexual Health", slug: "sexual-health", href: "/services/sexual-health", searchTerms: [
            "sexual health",
            "reproductive health",
            "sexual well-being",
            "Chlamydia",
            "HPV",
            "Urinary Tract Infection",
        ]
    },
    {
        name: "Gut Health", slug: "gut-health", href: "/services/gut-health", searchTerms: [
            "gut health",
            "digestive health",
            "intestinal well-being",
            "stomach health",
            "stomach",
            "digestive",
            "gord",
            "acid reflux",
            "Irritable Bowel Syndrome",
            "gastrointestinal",
            "gastro",
        ]
    },
    {
        name: "Travel Health", slug: "travel-health", href: "/services/travel-health", searchTerms: [
            "travel health",
            "health while traveling",
            "travel-related health", "Anti-Malaria Medications",
            "Insect Repellent",
            "Travel Vaccinations",
            "Travel Sickness Products",
            "Covid 19 Travel Health",
        ]
    },
    {
        name: "Shingles", slug: "shingles", href: "/services/shingles", searchTerms: [
            "shingles",
            "herpes zoster",
            "shingles vaccine",
            "shingles treatment",
            "shingles rash",
        ]
    },
    {
        name: "Book Vaccinations", slug: "book-vaccinations", href: "/services/book-vaccinations", searchTerms: [
            "book vaccinations",
            "schedule vaccinations",
            "vaccination appointments",
            "Free Travel Consultation",
            "Chicken Pox",
            "Cholera",
            "Diptheria",
            "Tetanus ",
            "Polio",
            "DPT",
            "B12 injection",
            "Hepatitis A",
            "Hepatitis B",
            "Japanese Encephalitis",
            "Malaria",
            "Meningitis ACWY",
            "MMR Vaccine",
            "Rabies",
            "Shingles",
            "Typhoid",
            "HPV Vaccine",
            "TICK-BORNE ENCEPHALITIS",
            "Yellow Fever",
        ]
    },
    {
        name: "Free Consultation", slug: "free-consultation", href: "/services/free-consultation", searchTerms: [
            "free consultation",
            "consultation services",
            "free health advice"
        ]
    },
    {
        name: "Rabies Vaccination", slug: "rabies-vaccination", href: "/services/rabies-vaccination", searchTerms: [
            "rabies vaccination",
            "preventive vaccinations",
            "animal bite prevention"
        ]
    },
    {
        name: "Yellow Fever Vaccination", slug: "yellow-fever-vaccination", href: "/services/yellow-fever-vaccination", searchTerms: [
            "yellow fever vaccination",
            "travel vaccinations",
            "tropical disease prevention",
            "Yellow Fever",
            "Yellow Fever Certificate",
        ]
    },
    {
        name: "Women’s Health", slug: "womens-health", href: "/services/womens-health", searchTerms: [
            "women's health",
            "female health",
            "womens well-being",
            "Delay Menstruation",
            "Hirsutism",
            "Contraception",
            "The Morning After Pill",
        ]
    },
    {
        name: "Repeat Oral Contraception", slug: "repeat-oral-contraception", href: "/services/repeat-oral-contraception", searchTerms: [
            "repeat oral contraception",
            "birth control",
            "contraceptive options"
        ]
    },
    {
        name: "Men’s Health", slug: "mens-health", href: "/services/mens-health", searchTerms: [
            "men's health",
            "male health",
            "men's well-being",
            "Mens Hair Loss",
            "Premature Ejaculation",
            "Erectile Dysfunction",
            "Viagra",
        ]
    },
    {
        name: "Quit Smoking", slug: "quit-smoking", href: "/services/quit-smoking", searchTerms: [
            "quit smoking",
            "smoking cessation",
            "tobacco addiction"
        ]
    },
    {
        name: "Weight Management", slug: "weight", href: "/services/weight", searchTerms: [
            "weight management",
            "healthy weight",
            "weight control",
            "weight loss",
            "weight gain",
        ]
    },
    {
        name: "B12 Injections", slug: "b12-injections", href: "/services/b12-injections", searchTerms: [
            "B12 injections",
            "vitamin injections",
            "nutrient supplementation"
        ]
    },
    {
        name: "Free Blood Pressure Testing", slug: "free-blood-pressure-testing", href: "/services/free-blood-pressure-testing", searchTerms: [
            "free blood pressure testing",
            "blood pressure checks",
            "hypertension screening"
        ]
    },
    {
        name: "Diabetes Test", slug: "diabetes-test", href: "/services/diabetes-test", searchTerms: [
            "diabetes test",
            "blood sugar testing",
            "glucose level check"
        ]
    },
    {
        name: "Blood Tests", slug: "blood-tests", href: "/services/blood-tests", searchTerms: [
            "blood tests",
            "lab tests",
            "diagnostic bloodwork"
        ]
    },
    {
        name: "Covid Tests", slug: "covid-tests", href: "/services/covid-tests", searchTerms: [
            "Covid tests",
            "coronavirus testing",
            "COVID-19 screenings"
        ]
    },
    {
        name: "Travel Vaccinations", slug: "travel-vaccinations", href: "/services/travel-vaccinations", searchTerms: [
            "travel vaccinations",
            "immunizations for travel",
            "vaccine shots for journeys"
        ]
    },
    {
        name: "Covid Vaccinations", slug: "covid-vaccinations", href: "/services/covid-vaccinations", searchTerms: [
            "Covid vaccinations",
            "coronavirus vaccinations",
            "COVID-19 vaccine shots"
        ]
    },
    {
        name: "Skincare", slug: "skincare", href: "/services/skincare", searchTerms: [
            "skincare",
            "skin health",
            "dermatological care",
            "Acne",
            "Scalp Dermatitis",
            "Skin Infections",
            "Fungal Infections",
            "Itching",
        ]
    },
    {
        name: "Ear Services", slug: "ear-services", href: "/services/ear-services", searchTerms: [
            "ear services",
            "hearing health",
            "audiological care"
        ]
    },
    {
        name: "Ear Consultation", slug: "ear-consultation", href: "/services/ear-consultation", searchTerms: [
            "ear services",
            "hearing health",
            "ear testing",
            "audiological care",
            "ear consultation",
            "ear health",
        ]
    },
    {
        name: "Ear Piercing", slug: "ear-piercing", href: "/services/ear-piercing", searchTerms: [
            "ear piercing",
            "earlobe piercing",
            "ear jewelry",
            "Ear Piercing Aftercare",
        ]
    },
    {
        name: "Ear Ache", slug: "earache", href: "/services/earache", searchTerms: [
            "ear ache",
            "ear pain",
            "ear discomfort",
            "earache",
        ]
    },
    {
        name: "UTI", slug: "uti", href: "/services/uti", searchTerms: [
            "UTI",
            "urinary tract infection",
            "bladder infection",
            "cystitis",
            "UTI treatment",
            "UTI prevention",
        ]
    },
    {
        name: "Infected Insect Bites", slug: "infected-insect-bites", href: "/services/infected-insect-bites", searchTerms: [
            "infected insect bites",
            "insect bite treatment",
            "insect bite infection",
            "insect bite prevention",
            "insect bite care",
            "insect bite first aid",
        ]
    },
    {
        name: "Domestic Violence Help", slug: "domestic-violence-help", href: "/services/domestic-violence-help", searchTerms: [
            "domestic violence help",
            "abuse support",
            "violence prevention"
        ]
    }
];
document.addEventListener("DOMContentLoaded", function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList") {
                const searchInput = document.getElementById("searchInput");
                if (searchInput) {
                    initSearch();
                    observer.disconnect(); // Optional: disconnect observer if you only need to initialize once
                }
            }
        });
    });

    // Configuration of the observer:
    const config = { attributes: true, childList: true, subtree: true };

    // Select the target node to observe
    const target = document.body; // Adjust if you can be more specific

    // Start observing
    observer.observe(target, config);

    function initSearch() {
        const searchInput = document.getElementById("searchInput");
        const searchResults = document.getElementById("searchResults");
        const noResults = document.getElementById("noResults"); // Ensure this is defined if used in displayResults

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (!searchTerm) {
                searchResults.style.display = "none";
                return;
            }

            const filteredResults = data.filter(item =>
                item.searchTerms.some(term => term.includes(searchTerm))
            );

            displayResults(filteredResults.slice(0, 3));
        });

        function displayResults(results) {
            if (results.length > 0) {
                searchResults.innerHTML = "";
                results.forEach(result => {
                    const resultItem = document.createElement("a");
                    resultItem.classList.add("result-item");
                    resultItem.textContent = result.name;
                    resultItem.href = result.href;
                    searchResults.appendChild(resultItem);
                });

                searchResults.style.display = "block";
                noResults.style.display = "none";
            } else {
                searchResults.style.display = "none";
                noResults.style.display = "flex";
            }
        }
    }
});
