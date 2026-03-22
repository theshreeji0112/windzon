document.addEventListener("DOMContentLoaded", function () {
    function query(name) {
        return new URLSearchParams(window.location.search).get(name);
    }

    function typeSection(code, title, image, description, specs) {
        var images = Array.isArray(image) ? image : [image, image, image];
        return {
            code: code,
            title: title,
            image: images[0],
            images: images,
            description: description,
            specs: specs
        };
    }

    function itemConfig(config) {
        return config;
    }

    var productCatalog = {
        windows: {
            label: "Windows",
            pageUrl: "window.html",
            items: {
                "casement-windows": itemConfig({
                    title: "Casement Windows",
                    tagline: "Catalogue Detail",
                    intro: "A design-led casement window family styled around a cleaner catalogue presentation. This section now focuses on the three selected casement systems: 30mm, 40mm, and 50mm.",
                    overviewTitle: "Casement Window System Range",
                    overviewSummary: "This range is inspired by the technical style of the catalogue and focuses on practical product comparison. It now presents the 30mm, 40mm, and 50mm casement systems in a clearer Windzon format.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Side-hung, top-hung, and mixed composition possibilities",
                        "Premium locking and hardware compatibility",
                        "30mm, 40mm, and 50mm system choices",
                        "Designed for villas, residences, and commercial facades"
                    ],
                    sourceNote: "Key type references and specifications on this page are adapted from the Ventarch catalogue and then restyled for Windzon.",
                    types: [
                        typeSection(
                            "CW - 30",
                            "30mm Casement Windows",
                            ["CW/CW30.png", "CW/CW30(1).png", "CW/CW30(2).png"],
                            "A compact casement solution for projects that need dependable performance, practical locking, and a neat aluminium profile for residential openings and utility-friendly applications.",
                            [
                                "Frame depth: 30 mm",
                                "Locking type: Single & Multipoint Lock with Handle",
                                "Glass range: 4 mm to 6 mm",
                                "Openable sight line: 73.4 mm",
                                "Fix sight line: 44.4 mm",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 6 mm (Sealing with Gasket)",
                                "Window height (max.): 1530 mm",
                                "Hardware: SCHLEGEL GIESSE"
                            ]
                        ),
                        typeSection(
                            "CW - 40",
                            "40mm Casement Windows",
                            ["CW/CW40.png", "CW/CW40(1).png", "CW/CW40(2).png"],
                            "A balanced casement solution for residences, apartment flats, and commercial spaces. It is well suited for projects that need dependable performance, clean framing, and practical everyday operation.",
                            [
                                "Frame depth: 40 mm",
                                "Locking type: Single & Multipoint Lock with Handle",
                                "Glass range: 5 mm to 28 mm",
                                "Openable sight line: 72.3 mm",
                                "Fix sight line: 39 mm",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 6 mm (Sealing with Gasket)",
                                "Window height (max.): 1830 mm",
                                "Hardware: SCHLEGEL GIESSE"
                            ]
                        ),
                        typeSection(
                            "CW - 50",
                            "50mm Casement Windows",
                            ["CW/CW50.png", "CW/CW50(1).png", "CW/CW50(2).png"],
                            "A more premium and robust casement system developed for larger openings and projects that need higher glass compatibility, stronger visual presence, and a refined architectural finish.",
                            [
                                "Frame depth: 50 mm",
                                "Locking type: Single & Multipoint Lock with Handle",
                                "Glass range: 5 mm to 38 mm",
                                "Openable sight line: 97.5 mm",
                                "Fix sight line: 46 mm",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 6 mm (Sealing with Gasket)",
                                "Window height (max.): 2100 mm",
                                "Hardware: SCHLEGEL GIESSE"
                            ]
                        )
                    ]
                }),
                "sliding-windows": itemConfig({
                    title: "Sliding Windows",
                    tagline: "Catalogue Detail",
                    intro: "This product page now follows a more technical catalogue flow, helping users compare the 22mm, 25mm, 27mm, and 37mm sliding window systems instead of only reading a generic description.",
                    overviewTitle: "Sliding Window System Range",
                    overviewSummary: "The sliding family is built around smooth movement, low air leakage, and strong long-term usability. This section now focuses on the four selected sliding systems: 22mm, 25mm, 27mm, and 37mm.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Designed for easy movement and sturdy long service life",
                        "Low air leakage and strong sealing intent",
                        "22mm, 25mm, 27mm, and 37mm system choices",
                        "Supports different track depths and glazing requirements"
                    ],
                    sourceNote: "Sliding window type sizes and technical references are adapted from the Ventarch catalogue, then reorganized into a Windzon-style layout.",
                    types: [
                        typeSection(
                            "SW - 22",
                            "22mm Sliding Windows",
                            ["SW/SW22.png", "SW/SW22(1).png", "SW/SW22(2).png", "SW/SW22(3).png"],
                            "A practical entry-level sliding window system suitable for smaller openings and projects where reliable day-to-day operation, simple locking, and straightforward fabrication are the priority.",
                            [
                                "Shutter depth: 22 mm",
                                "Locking type: single point lock",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: sealing with wool pile",
                                "Glass range: 4 mm to 6 mm",
                                "Sightline with shutter: 82 mm",
                                "2 track depth: 54 mm",
                                "3 track depth: 84 mm",
                                "Window height (max.): 1530 mm",
                                "Finishes: Powder/Wood/Anodizing",
                                "Hardware & wool pile: NA"
                            ]
                        ),
                        typeSection(
                            "SW - 25",
                            "25mm Sliding Windows",
                            ["SW/SW25.png", "SW/SW25(1).png", "SW/SW25(2).png", "SW/SW25(3).png"],
                            "A more versatile sliding window system for projects that need stronger locking support, a cleaner premium finish, and larger height capacity than the basic compact range.",
                            [
                                "Shutter depth: 25 mm",
                                "Locking type: single and multipoint lock with handle",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 8 mm (sealing with wool pile)",
                                "Glass range: 4 mm to 6 mm",
                                "Sightline with shutter: 95 mm",
                                "2 track depth: 50 mm",
                                "3 track depth: 86 mm",
                                "Window height (max.): 2100 mm",
                                "Finishes: Powder/Wood/Anodizing",
                                "Hardware & wool pile: SCHLEGEL GIESSE"
                            ]
                        ),
                        typeSection(
                            "SW - 27",
                            "27mm Sliding Windows",
                            ["SW/SW27.png", "SW/SW27(1).png", "SW/SW27(2).png", "SW/SW27(3).png"],
                            "A balanced mid-range sliding window system designed for projects that need better sealing, broader glazing choices, and improved hardware compatibility for residential and mixed-use applications.",
                            [
                                "Shutter depth: 27 mm",
                                "Locking type: single & multipoint lock with Champion Plus",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 11 mm (sealing with wool pile)",
                                "Single glass range: 4 / 5 / 6 mm",
                                "Double glass range: 18 mm",
                                "Laminated glass: NA",
                                "Sightline with shutter: 99 mm",
                                "2 track depth: 40 mm",
                                "3 track depth: 75 mm",
                                "Window height (max.): 2135 mm",
                                "Finishes: Powder/Wood/Anodizing",
                                "Hardware & wool pile: SCHLEGEL GIESSE"
                            ]
                        ),
                        typeSection(
                            "SW - 37",
                            "37mm Sliding Windows",
                            ["SW/SW37.png", "SW/SW37(1).png", "SW/SW37(2).png", "SW/SW37(3).png"],
                            "A stronger sliding window solution for larger spans and heavier glazing where enhanced build depth, premium hardware support, and larger overall dimensions are needed. This range also supports the sleek profile concept.",
                            [
                                "Shutter depth: 37 mm",
                                "Locking type: single and multipoint lock with handle",
                                "Corner details: 45 degree cut with corner connector",
                                "Sealing overlap: 9 mm (sealing with wool pile)",
                                "Glass range: 6 mm to 24 mm",
                                "Sightline with shutter: 124 mm",
                                "2 track depth: 61 mm",
                                "3 track depth: 110 mm",
                                "Window height (max.): 3010 mm",
                                "Finishes: Powder/Wood/Anodizing",
                                "Hardware & wool pile: SCHLEGEL GIESSE"
                            ]
                        )
                    ]
                }),
                "fixed-windows": itemConfig({
                    title: "Fixed Windows",
                    tagline: "System Detail",
                    intro: "The fixed window detail page is refocused around applications, visibility, and integration with opening systems so it reads more like a modern product sheet.",
                    overviewTitle: "Fixed Window Design Series",
                    overviewSummary: "Fixed windows are used where daylight, visual openness, and clean elevation matter most. They work especially well in staircases, facades, feature walls, and mixed window compositions.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "High glass-to-frame visual impact",
                        "Suitable for design-led facades and stair cores",
                        "Can be paired with openable sections in mixed compositions",
                        "Supports laminated, insulated, and performance glass"
                    ],
                    sourceNote: "Fixed and mixed-format references are organised from the same casement-family design language and adapted for Windzon presentation.",
                    types: [
                        typeSection(
                            "FW - 30",
                            "30 mm Fixed Window",
                            "assets/img/window/01.jpg",
                            "A compact fixed solution for smaller feature openings and clean modern compositions where minimal maintenance and daylight entry are the main goals.",
                            [
                                "Frame depth: 30 mm",
                                "Glass range: 4 mm to 6 mm",
                                "Fix sight line: 44.4 mm",
                                "Corner detail: 45 degree cut with corner connector",
                                "Sealing overlap: 6 mm with gasket",
                                "Window height: up to 1530 mm",
                                "Best fit: compact fixed compositions",
                                "Good for staircase and secondary facade windows"
                            ]
                        ),
                        typeSection(
                            "FW - 32",
                            "32 mm Fixed + Openable Combination",
                            "assets/img/window/01.jpg",
                            "A refined fixed-and-openable compatible format for projects that want a clean large glazed look while maintaining one active opening section in the composition.",
                            [
                                "Frame depth: 32 mm",
                                "Glass range: 4 mm to 6 mm",
                                "Fix sight line: 40 mm",
                                "Window height: up to 1650 mm",
                                "Supports mixed fixed and outward-openable composition",
                                "Good for double-window arrangements",
                                "Elegant for residential bedroom and living elevations",
                                "Hardware ready for coordinated combinations"
                            ]
                        ),
                        typeSection(
                            "FW - 50",
                            "50 mm Fixed + Openable Composition",
                            "assets/img/window/01.jpg",
                            "A premium fixed-window composition that supports larger glass, more substantial framing, and cleaner integration in luxury homes and commercial spaces.",
                            [
                                "Frame depth: 50 mm",
                                "Glass range: 5 mm to 38 mm",
                                "Fix sight line: 46 mm",
                                "Window height: up to 2100 mm",
                                "Compatible with top-hung and outside-openable pairings",
                                "Better suited for premium and larger format layouts",
                                "Supports stronger glazing and frame options",
                                "Ideal for statement facade use"
                            ]
                        )
                    ]
                }),
                "top-hung-windows": itemConfig({
                    title: "Top Hung Windows",
                    tagline: "System Detail",
                    intro: "This page presents top-hung options in a cleaner technical format, focusing on controlled ventilation, weather-ready detailing, and project-appropriate type choices.",
                    overviewTitle: "Top Hung Window Series",
                    overviewSummary: "Top-hung windows are ideal for ventilation-focused spaces where controlled opening, rain protection, and compact performance matter. They suit both homes and utility-driven commercial areas.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Controlled outward opening for safer ventilation",
                        "Works well in bathrooms, staircases, and service spaces",
                        "Compatible with casement-family detailing",
                        "Available in compact and premium depth options"
                    ],
                    sourceNote: "Top-hung references are adapted from the casement-family catalogue flow and rebuilt into Windzon’s inner page structure.",
                    types: [
                        typeSection(
                            "TH - 30",
                            "30 mm Top Hung Window",
                            "assets/img/window/01.jpg",
                            "A slim top-hung option for smaller openings and ventilation zones where a clean, economical, and dependable solution is preferred.",
                            [
                                "Frame depth: 30 mm",
                                "Glass range: 4 mm to 6 mm",
                                "Sealing overlap: 6 mm with gasket",
                                "Window height: up to 1530 mm",
                                "Suitable for compact bathrooms and utility zones",
                                "Top-hung opening format available in the system family",
                                "Lightweight daily use profile",
                                "Good for secondary facade ventilation"
                            ]
                        ),
                        typeSection(
                            "TH - 40",
                            "40 mm Top Hung Window",
                            "assets/img/window/01.jpg",
                            "A more balanced top-hung system for medium-size residential and commercial openings that need a stronger frame, cleaner look, and better glazing flexibility.",
                            [
                                "Frame depth: 40 mm",
                                "Glass range: 5 mm to 28 mm",
                                "Fix sight line: 39 mm",
                                "Window height: up to 1830 mm",
                                "Suitable for medium ventilation openings",
                                "Offers stronger frame build than the compact variant",
                                "Compatible with premium hardware",
                                "Ideal for practical daily ventilation"
                            ]
                        ),
                        typeSection(
                            "TH - 50",
                            "50 mm Top Hung Window",
                            "assets/img/window/01.jpg",
                            "A premium top-hung solution for larger and more design-sensitive projects where insulation, visual quality, and stronger overall performance are important.",
                            [
                                "Frame depth: 50 mm",
                                "Glass range: 5 mm to 38 mm",
                                "Openable sight line: 97.5 mm",
                                "Window height: up to 2100 mm",
                                "Suitable for premium homes and designer facades",
                                "Supports larger glazing requirements",
                                "Premium finish and hardware compatibility",
                                "Best for high-value ventilation compositions"
                            ]
                        )
                    ]
                }),
                "bay-bow-windows": itemConfig({
                    title: "Bay & Bow Windows",
                    tagline: "Design Detail",
                    intro: "This inner page shifts bay and bow windows into a more catalogue-style story with type-led presentation, helping clients compare layout intent and usage differences more clearly.",
                    overviewTitle: "Bay & Bow Window Collection",
                    overviewSummary: "Bay and bow windows are feature-driven systems that add projection, depth, and panoramic value to the elevation. They are ideal for premium residences, villas, and spaces that need stronger facade character.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Adds depth and visual interest to the facade",
                        "Creates wider outward view and stronger daylight spread",
                        "Can combine fixed and openable sections",
                        "Well suited to premium residential architecture"
                    ],
                    sourceNote: "These type comparisons are structured for Windzon’s site and focus on layout and project intent rather than duplicating the source catalogue.",
                    types: [
                        typeSection("BW - Corner", "Corner Bay Window", "assets/img/window/01.jpg", "A clean angular bay composition suited to living rooms and facades that need a crisp architectural projection.", ["Best for corner projections", "Strong daylight entry", "Ideal for villas and premium homes", "Can combine fixed and openable leaves", "Suitable for lounge and feature spaces", "Premium elevation effect"]),
                        typeSection("BW - Panorama", "Panoramic Bow Window", "assets/img/window/01.jpg", "A softer panoramic bow-style treatment that creates a premium visual curve and a broader, more immersive view line.", ["Curved visual character", "Panoramic glazing emphasis", "Ideal for front elevation focal points", "Rich premium appearance", "Supports interior feature seating concepts", "Suitable for luxury projects"]),
                        typeSection("BW - Mixed", "Mixed Feature Composition", "assets/img/window/01.jpg", "A tailored composition that blends bay-style framing with custom opening combinations for project-specific design intent.", ["Custom panel arrangement", "Fixed and openable mix", "Tailored projection depth", "Ideal for bespoke architecture", "Works for statement facades", "Flexible fabrication strategy"])
                    ]
                }),
                "sash-windows": itemConfig({
                    title: "Sash Windows",
                    tagline: "Design Detail",
                    intro: "The sash window page now behaves more like a design sheet, with type blocks explaining how the system can adapt to classic, modern, and renovation-led spaces.",
                    overviewTitle: "Sash Window Design Family",
                    overviewSummary: "Sash windows bring traditional visual rhythm into modern aluminium construction. They are suited to design-led residences, renovations, and projects wanting a more classic facade language.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Classic visual character with modern aluminium durability",
                        "Good for villas, bungalows, and premium renovations",
                        "Supports decorative glazing and finish-led detailing",
                        "Balances heritage styling with easier maintenance"
                    ],
                    sourceNote: "This page is customised for Windzon and uses a catalogue-like comparison format without copying the source layout directly.",
                    types: [
                        typeSection("SW - Classic", "Classic Sash Type", "assets/img/window/01.jpg", "A traditional sash-style arrangement with balanced proportions and decorative character suited to more heritage-inspired facades.", ["Classic elevation language", "Ideal for villas and renovations", "Supports decorative glass options", "Premium finish flexibility", "Low maintenance aluminium frame", "Tailored hardware choices"]),
                        typeSection("SW - Modern", "Modern Sash Type", "assets/img/window/01.jpg", "A simplified sash-inspired system for contemporary homes that want a nod to classic style without a heavy traditional look.", ["Cleaner frame expression", "Good for modern homes", "Balanced proportions", "Flexible colour selection", "Easy project integration", "Suitable for premium bedrooms and lounges"]),
                        typeSection("SW - Premium", "Premium Designer Sash", "assets/img/window/01.jpg", "A more refined sash expression suited to high-end projects that want heritage influence with contemporary material confidence.", ["High-end visual finish", "Luxury home friendly", "Decorative detailing support", "Custom fabrication", "Architectural fit-out friendly", "Project-specific styling"])
                    ]
                }),
                "slimline-protection-system": itemConfig({
                    title: "Slimline Protection System",
                    tagline: "Performance Detail",
                    intro: "This page reframes the slimline protection system into a more technical and premium presentation, centered on slim aesthetics, enhanced hardware, and cleaner protected openings.",
                    overviewTitle: "Slimline Protection Collection",
                    overviewSummary: "Slimline protection systems are built for projects that want minimal sight lines without sacrificing hardware confidence, design quality, or security-oriented detailing.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Slim visible section for modern elevations",
                        "Enhanced locking and safety-oriented detailing",
                        "Suitable for premium villas and offices",
                        "Supports performance glazing combinations"
                    ],
                    sourceNote: "This product section is original to Windzon and follows the same catalogue-style layout while remaining distinct from the reference design.",
                    types: [
                        typeSection("SP - 01", "Standard Slimline Protection", "assets/img/window/01.jpg", "A clean entry slimline option for premium residences where aesthetics and basic security support are both important.", ["Slim visible framing", "Suitable for residences and offices", "Supports single and performance glass", "Neat elevation finish", "Security-ready hardware", "Low maintenance system"]),
                        typeSection("SP - 02", "Advanced Protection Type", "assets/img/window/01.jpg", "A stronger slimline solution with upgraded locking compatibility and enhanced use in premium or security-conscious projects.", ["Enhanced locking support", "Premium modern look", "Good for higher-end projects", "Compatible with safety glass", "Improved structural confidence", "Tailored fabrication available"]),
                        typeSection("SP - 03", "Signature Slimline Series", "assets/img/window/01.jpg", "A design-forward system for projects where architecture, visible lightness, and premium hardware detailing all need to work together.", ["Ultra-clean visual language", "Architect-focused design intent", "Supports refined finish palette", "Premium facade integration", "Suitable for signature homes", "High-value presentation"])
                    ]
                }),
                "thermal-windows": itemConfig({
                    title: "Thermal Windows",
                    tagline: "Performance Detail",
                    intro: "This product page is rebuilt around comfort, insulation intent, and premium all-season usability so it reads like a technical solution page rather than a generic content block.",
                    overviewTitle: "Thermal Window System Series",
                    overviewSummary: "Thermal windows are suited to projects that prioritize comfort, improved glazing performance, and refined aluminium aesthetics with better energy-conscious detailing.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: [
                        "Improved interior comfort and insulation intent",
                        "Supports high-performance and double glazing",
                        "Suitable for homes, offices, and premium upgrades",
                        "Strong fit for climate-conscious projects"
                    ],
                    sourceNote: "This thermal system presentation is original to Windzon and is arranged in the same comparison-first catalogue spirit you requested.",
                    types: [
                        typeSection("TW - Comfort", "Comfort Thermal Window", "assets/img/window/01.jpg", "A performance-led window type for homes and offices that need better comfort with a modern aluminium look.", ["Comfort-focused build", "Double glazing compatible", "Suitable for homes and offices", "Better heat control intent", "Contemporary finish options", "Daily-use friendly design"]),
                        typeSection("TW - Premium", "Premium Thermal Window", "assets/img/window/01.jpg", "A premium thermal solution for larger projects where glazing performance, acoustic control, and architectural finish all matter more.", ["Enhanced glazing compatibility", "Premium acoustic and thermal intent", "Suitable for luxury homes", "Commercial-ready appearance", "Custom size fabrication", "Premium hardware support"]),
                        typeSection("TW - Signature", "Signature Thermal Series", "assets/img/window/01.jpg", "A high-end thermal system for design-sensitive projects wanting comfort, performance, and upscale facade quality in one solution.", ["High-end insulated concept", "Luxury project ready", "Supports refined color palette", "Large opening suitability", "Better comfort positioning", "Elevated premium look"])
                    ]
                })
            }
        },
        doors: {
            label: "Doors",
            pageUrl: "door.html",
            items: {
                "sliding-doors": itemConfig({
                    title: "Sliding Doors",
                    tagline: "System Detail",
                    intro: "The sliding door inner page is now rebuilt in a more visual catalogue style so users can compare door system types and project intent more clearly.",
                    overviewTitle: "Sliding Door Collection",
                    overviewSummary: "Sliding doors support wide movement, large glazed openings, and a cleaner indoor-outdoor transition. They work well in patios, balconies, showrooms, and commercial frontage applications.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Space-saving opening action", "Large glass areas and wide views", "Suitable for residential and commercial projects", "Supports premium handles and locking"],
                    sourceNote: "This door page follows the new Windzon catalogue-style structure and focuses on practical system comparison.",
                    types: [
                        typeSection("SD - 90", "Two Track Sliding Door", "assets/img/door/01.jpg", "A streamlined two-track sliding door suited to residences and balcony-facing openings that need easy movement and clean detailing.", ["Two-track movement concept", "Clean modern aluminium frame", "Suitable for patios and balconies", "Supports premium glass options", "Space-efficient opening", "Low maintenance daily use"]),
                        typeSection("SD - 120", "Wide Span Sliding Door", "assets/img/door/01.jpg", "A broader sliding configuration for larger glass spans, premium homes, and commercial spaces that need stronger visual openness.", ["Wider opening suitability", "Large glass presentation", "Ideal for premium homes", "Commercial frontage friendly", "Smooth heavy-panel handling intent", "Modern finish-led design"]),
                        typeSection("SD - Panorama", "Panoramic Sliding Series", "assets/img/door/01.jpg", "A premium panoramic system created for maximum view, enhanced daylight, and refined project styling in statement spaces.", ["Panoramic visual appeal", "Premium movement system", "High-end architectural use", "Luxury villa application", "Broad daylight entry", "Strong indoor-outdoor transition"])
                    ]
                }),
                "hinged-doors": itemConfig({
                    title: "Hinged Doors",
                    tagline: "Catalogue Detail",
                    intro: "The hinged door page now adopts a more technical product-sheet flow, including door type comparisons and clearer system selection guidance.",
                    overviewTitle: "Hinged Door System Range",
                    overviewSummary: "Hinged aluminium doors remain a premium and dependable solution for entries, access points, internal partitions, and designer openings that need strong closure and quality hardware.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Strong closure and entry-focused performance", "Compatible with premium locksets and hinges", "Good for residential and office applications", "Built around daily-use durability"],
                    sourceNote: "Type references for hinged-style systems are adapted from the casement door section of the Ventarch catalogue and restyled for Windzon.",
                    types: [
                        typeSection("HD - 40", "40 mm Hinged Door", "assets/img/door/01.jpg", "A reliable hinged door solution for standard entries and internal access points where balanced durability and premium appearance are required.", ["Frame depth: 40 mm", "Glass range: 5 mm to 28 mm", "Openable sight line: 104.4 mm", "Fix sight line: 55.3 mm", "Sealing overlap: 6 mm with gasket", "Height support: up to 2135 mm", "Hardware: SCHLEGEL GIESSE", "Suitable for single and double leaf use"]),
                        typeSection("HD - 50", "50 mm Hinged Door", "assets/img/door/01.jpg", "A more robust hinged door option for larger entries and premium projects that need stronger door-bottom support and broader glazing compatibility.", ["Frame depth: 50 mm", "Glass range: 5 mm to 38 mm", "Openable sight line: 142 mm", "Fix sight line: 74 mm", "Sealing overlap: 6 mm with gasket", "Height support: up to 2440 mm", "Hardware: SCHLEGEL GIESSE", "Available in inside and outside openable versions"]),
                        typeSection("HD - Premium", "Premium Entry Door", "assets/img/door/01.jpg", "A premium entry configuration focused on better hardware integration, stronger visual width, and higher-end entrance styling.", ["Premium entry appearance", "Larger opening suitability", "Enhanced lock compatibility", "Ideal for villas and showrooms", "Better glass flexibility", "High-end finish compatibility"])
                    ]
                }),
                "fixed-glass-doors": itemConfig({
                    title: "Fixed Glass Doors",
                    tagline: "System Detail",
                    intro: "This page presents fixed glass door solutions in a more editorial catalogue format, emphasizing visibility, glass presence, and interior-commercial use cases.",
                    overviewTitle: "Fixed Glass Door Series",
                    overviewSummary: "Fixed glass doors are selected for spaces where openness, visibility, and a clean glass-led entrance matter most. They suit showrooms, office cabins, premium partitions, and minimalist interiors.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Glass-forward modern appearance", "Ideal for offices, showrooms, and designer spaces", "Can be paired with premium handles and hardware", "Strong fit for clean interior partition language"],
                    sourceNote: "This content is adapted into a Windzon-first presentation and is intentionally different from the reference layout.",
                    types: [
                        typeSection("FGD - Slim", "Slim Glass Entry", "assets/img/door/01.jpg", "A slim-profile glass-focused door format for clean office and residential transitions.", ["Minimal visible frame", "Strong glass emphasis", "Good for office entries", "Contemporary design language", "Easy integration with premium hardware", "Suitable for partitions"]),
                        typeSection("FGD - Office", "Office Glass Door", "assets/img/door/01.jpg", "A practical glass-led door for cabins, meeting rooms, and commercial interiors that need visibility and polish.", ["Professional modern appearance", "Suitable for internal commercial spaces", "Supports clear and frosted glass", "Clean partition integration", "Good for cabins and meeting rooms", "Premium handle compatibility"]),
                        typeSection("FGD - Signature", "Signature Glass Series", "assets/img/door/01.jpg", "A higher-end glass door styling for premium interiors where visual openness and design value are both important.", ["Luxury visual finish", "Designer interior fit-outs", "High transparency impact", "Strong architectural appeal", "Elegant finish palette", "Project-led customization"])
                    ]
                }),
                "folding-doors": itemConfig({
                    title: "Folding Doors",
                    tagline: "System Detail",
                    intro: "The folding door detail page now compares opening-focused variants in a more technical and presentation-ready style.",
                    overviewTitle: "Folding Door Collection",
                    overviewSummary: "Folding doors open up larger spans and are ideal for hospitality, premium residential transitions, and spaces that need flexible opening width with strong visual impact.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Wide opening for flexible planning", "Suitable for patios and hospitality fronts", "Multi-panel movement system", "Strong premium visual effect"],
                    sourceNote: "The layout is original to Windzon and focuses on system comparison rather than copying the source design language directly.",
                    types: [
                        typeSection("FD - Compact", "Compact Folding Door", "assets/img/door/01.jpg", "A compact folding arrangement for premium residential areas where opening flexibility is needed without very large spans.", ["Compact multi-panel stack", "Suitable for residential openings", "Good for patios and terraces", "Smooth guided movement intent", "Premium contemporary styling", "Space-opening visual effect"]),
                        typeSection("FD - Wide", "Wide Opening Folding Door", "assets/img/door/01.jpg", "A broader panel arrangement for cafes, lounges, and premium villa openings where a large clear opening is a major design feature.", ["Wider opening system", "Ideal for cafes and social spaces", "Indoor-outdoor flexibility", "Premium track-led movement", "Strong visual transformation", "Hospitality-friendly design"]),
                        typeSection("FD - Signature", "Signature Folding Series", "assets/img/door/01.jpg", "A premium folding door setup for statement projects that want a more luxurious and dramatic opening experience.", ["Luxury project fit", "Premium panel movement", "High-end facade statement", "Strong daylight transition", "Signature architectural appeal", "Custom fabrication support"])
                    ]
                }),
                "french-doors": itemConfig({
                    title: "French Doors",
                    tagline: "Design Detail",
                    intro: "The French door page is now structured like a product sheet, helping clients understand styling intent, project fit, and premium use scenarios.",
                    overviewTitle: "French Door Design Series",
                    overviewSummary: "French doors combine balanced symmetry, decorative glazing potential, and a timeless upscale character. They are ideal for balconies, gardens, and premium room-to-room transitions.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Elegant symmetrical opening", "Ideal for premium homes and garden-facing rooms", "Supports decorative and clear glazing", "Timeless premium visual language"],
                    sourceNote: "This page uses Windzon’s custom layout while preserving the comparison-focused product storytelling you requested.",
                    types: [
                        typeSection("FDR - Classic", "Classic French Door", "assets/img/door/01.jpg", "A classic balanced French door configuration that suits balconies, lounges, and elegant transitions in high-value residential spaces.", ["Symmetrical double-door look", "Good for balconies and terraces", "Premium design character", "Supports decorative glazing", "Suitable for villas and bungalows", "Classic-modern blend"]),
                        typeSection("FDR - Garden", "Garden French Door", "assets/img/door/01.jpg", "A garden-facing French door style for homes that need a lighter, open, and more welcoming transition to outdoor spaces.", ["Best for garden openings", "Broad daylight and view", "Decorative premium styling", "Comfortable everyday access", "Premium finish choices", "Ideal for living zones"]),
                        typeSection("FDR - Luxe", "Luxe French Series", "assets/img/door/01.jpg", "A more refined French door variation for designer projects where visual softness and upscale detailing are especially important.", ["Luxury styling", "Designer project ready", "Decorative glazing support", "High-end finish palette", "Elegant interior transition", "Premium hardware options"])
                    ]
                }),
                "customized-doors": itemConfig({
                    title: "Customized Doors",
                    tagline: "Project Detail",
                    intro: "This page turns customized doors into a clearer solution page, showing how different configuration types can be selected based on design and project need.",
                    overviewTitle: "Customized Door Solutions",
                    overviewSummary: "Customized doors are made for non-standard openings, special dimensions, distinctive finish selections, and project-specific architectural language.",
                    overviewImage: "assets/img/door/01.jpg",
                    overviewPoints: ["Built around project-specific dimensions", "Supports special finishes and hardware", "Ideal for signature residences and commercial spaces", "Flexible panel and glazing arrangements"],
                    sourceNote: "This section is written specifically for Windzon and organised in the new catalogue-style inner page format.",
                    types: [
                        typeSection("CD - Signature", "Signature Custom Door", "assets/img/door/01.jpg", "A made-to-order door concept for standout entrances and premium architectural moments.", ["Custom dimensioning", "Project-driven styling", "Supports statement entrances", "Premium hardware integration", "Designer-friendly solution", "Flexible material and glazing mix"]),
                        typeSection("CD - Commercial", "Commercial Custom Door", "assets/img/door/01.jpg", "A practical custom door format for offices, showrooms, and mixed-use spaces where standard systems do not fit the opening requirements.", ["Non-standard opening support", "Commercial project friendly", "Flexible frame and infill planning", "Reliable heavy-use suitability", "Professional finish options", "Installation-led customization"]),
                        typeSection("CD - Premium", "Premium Bespoke Door", "assets/img/door/01.jpg", "A bespoke premium door option for luxury homes and design-led projects that want tailored detailing at every level.", ["Luxury home focused", "Bespoke fabrication", "Tailored hardware and finishes", "High-end entry presentation", "Architect collaboration ready", "Unique visual identity"])
                    ]
                })
            }
        },
        blinds: {
            label: "Blinds",
            pageUrl: "blinds.html",
            items: {
                "roller-blinds": itemConfig({
                    title: "Roller Blinds",
                    tagline: "Product Detail",
                    intro: "The inner page is now rebuilt in a catalogue-style format so users can compare practical blind types instead of reading only a short overview.",
                    overviewTitle: "Roller Blind Collection",
                    overviewSummary: "Roller blinds deliver a neat, minimal, and highly practical solution for privacy and daylight control across residential, office, and retail interiors.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Simple and modern blind presentation", "Good for privacy and filtered daylight", "Available in sunscreen and blackout styles", "Suitable for residential and office interiors"],
                    sourceNote: "Blinds pages use Windzon-authored content in the new product-sheet layout to keep the site consistent.",
                    types: [
                        typeSection("RB - Screen", "Sunscreen Roller Blind", "assets/img/window/01.jpg", "A screen-oriented roller blind for spaces that want filtered daylight and daytime privacy with a cleaner office-friendly look.", ["Soft daylight filtering", "Suitable for offices and lounges", "Clean minimal appearance", "Good for screen-facing spaces", "Easy operation", "Modern texture options"]),
                        typeSection("RB - Blackout", "Blackout Roller Blind", "assets/img/window/01.jpg", "A blackout roller blind for bedrooms and media spaces where stronger light blockage and privacy are important.", ["High privacy control", "Better room darkening", "Ideal for bedrooms", "Simple contemporary appearance", "Comfort-led choice", "Multiple fabric options"]),
                        typeSection("RB - Premium", "Premium Designer Roller", "assets/img/window/01.jpg", "A more premium roller format with richer fabric choice and a refined fit for designer interiors.", ["Enhanced fabric styling", "Premium interior appeal", "Suitable for upscale homes", "Clean cassette presentation", "Soft luxury look", "Custom size fabrication"])
                    ]
                }),
                "vertical-blinds": itemConfig({
                    title: "Vertical Blinds",
                    tagline: "Product Detail",
                    intro: "This detail page compares vertical blind styles in a cleaner product-sheet format suited to the rest of the website.",
                    overviewTitle: "Vertical Blind Collection",
                    overviewSummary: "Vertical blinds are ideal for broader openings and work especially well in offices, large glazed spaces, and sliding door areas where directional light control matters.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Strong fit for wider openings", "Adjustable daylight direction", "Office-friendly and easy to maintain", "Professional and clean visual language"],
                    sourceNote: "This content is custom-built for Windzon’s website using the new inner page style.",
                    types: [
                        typeSection("VB - Office", "Office Vertical Blind", "assets/img/window/01.jpg", "A practical vertical blind setup for professional interiors and workspaces needing easy light management.", ["Best for offices", "Directional daylight adjustment", "Neat stack-back", "Professional clean look", "Good for larger windows", "Simple maintenance"]),
                        typeSection("VB - Home", "Residential Vertical Blind", "assets/img/window/01.jpg", "A softer vertical blind variation for homes with large glazing or patio-connected windows.", ["Good for broad home openings", "Balanced privacy control", "Soft designer finish options", "Suitable for living rooms", "Easy track operation", "Modern family homes"]),
                        typeSection("VB - Premium", "Premium Vertical Series", "assets/img/window/01.jpg", "A higher-end vertical blind style for premium commercial and designer interiors.", ["Premium fabric textures", "Commercial and designer fit", "Wider opening suitability", "Improved visual finish", "Elegant operation", "Custom vane styling"])
                    ]
                }),
                "venetian-blinds": itemConfig({
                    title: "Venetian Blinds",
                    tagline: "Product Detail",
                    intro: "The Venetian blind page is presented in the same type-based catalogue flow, making selection easier for both practical and style-led projects.",
                    overviewTitle: "Venetian Blind Collection",
                    overviewSummary: "Venetian blinds offer precise light control and a smart structured appearance. They are suited to kitchens, study rooms, offices, and minimal modern interiors.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Precise light adjustment", "Clean structured visual language", "Ideal for offices and utility-oriented interiors", "Easy to coordinate with modern design"],
                    sourceNote: "This content is original to Windzon and arranged in a catalogue-style comparison layout.",
                    types: [
                        typeSection("VB - Classic", "Classic Venetian Blind", "assets/img/window/01.jpg", "A dependable venetian blind style for crisp light control and everyday practicality.", ["Horizontal slat control", "Good for offices and studies", "Structured clean look", "Reliable daily use", "Simple tilt and raise control", "Easy to match interiors"]),
                        typeSection("VB - Luxe", "Premium Venetian Series", "assets/img/window/01.jpg", "A more refined venetian blind type for premium interiors wanting stronger visual finish and control.", ["Premium slat finish", "Better designer appeal", "Precise daylight control", "Suitable for high-end interiors", "Custom styling flexibility", "Strong modern character"]),
                        typeSection("VB - Utility", "Utility Venetian Blind", "assets/img/window/01.jpg", "A practical venetian format for utility, kitchen, and service spaces requiring easy adjustment and maintenance.", ["Kitchen-friendly styling", "Easy wipe-clean use", "Strong practical fit", "Light control focus", "Compact operation", "Suitable for daily-use spaces"])
                    ]
                }),
                "zebra-blinds": itemConfig({
                    title: "Zebra Blinds",
                    tagline: "Product Detail",
                    intro: "The zebra blind inner page now follows the same comparison-first structure to help clients understand the look and function of layered blind options.",
                    overviewTitle: "Zebra Blind Collection",
                    overviewSummary: "Zebra blinds combine sheer and solid fabric bands to create a modern layered daylight effect that is especially popular in bedrooms, lounges, and premium homes.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Modern layered day-and-night look", "Excellent for soft filtered daylight", "Decorative premium interior effect", "Popular in living rooms and bedrooms"],
                    sourceNote: "This layout and content are uniquely restyled for Windzon.",
                    types: [
                        typeSection("ZB - Soft", "Soft Daylight Zebra Blind", "assets/img/window/01.jpg", "A soft layered blind for living spaces that want gentle light filtering and decorative privacy control.", ["Soft filtered daylight", "Decorative layered fabric", "Good for living rooms", "Premium residential look", "Elegant modern design", "Comfort-led use"]),
                        typeSection("ZB - Private", "Privacy Zebra Blind", "assets/img/window/01.jpg", "A stronger privacy-oriented zebra blind for bedrooms and premium apartments.", ["Better privacy layering", "Bedroom-friendly look", "Modern visual softness", "Decorative fabric finish", "Suitable for premium apartments", "Easy alignment control"]),
                        typeSection("ZB - Designer", "Designer Zebra Series", "assets/img/window/01.jpg", "A richer zebra blind style for clients wanting a more refined and decorative modern window treatment.", ["Designer interior fit", "Luxury fabric selection", "Premium appearance", "Soft modern daylight control", "High-end residential use", "Custom shade palette"])
                    ]
                }),
                "roman-blinds": itemConfig({
                    title: "Roman Blinds",
                    tagline: "Product Detail",
                    intro: "Roman blinds are now presented in a more premium product-sheet style with type-led comparison and better visual storytelling.",
                    overviewTitle: "Roman Blind Collection",
                    overviewSummary: "Roman blinds bring softness, texture, and tailored elegance to bedrooms, lounges, boutiques, and premium residential interiors.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Soft fabric-led premium look", "Ideal for bedrooms and lounges", "Strong decorative interior value", "Tailored folded presentation when raised"],
                    sourceNote: "This product content is written specifically for Windzon and follows the new detail page structure.",
                    types: [
                        typeSection("RBM - Soft", "Soft Roman Blind", "assets/img/window/01.jpg", "A calm fabric-led roman blind for bedrooms and intimate interior spaces.", ["Soft folded fabric appearance", "Ideal for bedrooms", "Decorative and warm", "Premium home styling", "Comfort-focused selection", "Fabric texture variety"]),
                        typeSection("RBM - Lounge", "Lounge Roman Blind", "assets/img/window/01.jpg", "A richer roman blind option for living areas, lounges, and refined interior schemes.", ["Good for lounge and living rooms", "Elegant folded finish", "Tailored designer appeal", "Coordinates with premium interiors", "Softens the room visually", "Custom pattern options"]),
                        typeSection("RBM - Boutique", "Boutique Roman Series", "assets/img/window/01.jpg", "A more decorative roman blind type suited to boutique-style homes and hospitality interiors.", ["Boutique premium finish", "Decorative styling", "Luxury design use", "Fabric-rich presentation", "High-end fit-out friendly", "Custom colour stories"])
                    ]
                }),
                "motorized-blinds": itemConfig({
                    title: "Motorized Blinds",
                    tagline: "Product Detail",
                    intro: "The motorized blind page now reads like a solution sheet, with type blocks focused on automation, convenience, and premium use cases.",
                    overviewTitle: "Motorized Blind Collection",
                    overviewSummary: "Motorized blinds are ideal for smart homes, large glazed openings, premium residences, and modern office spaces where convenience and automation matter.",
                    overviewImage: "assets/img/window/01.jpg",
                    overviewPoints: ["Effortless motor-driven operation", "Ideal for smart homes and premium offices", "Good for wide glazing and premium interiors", "Supports modern automation-led living"],
                    sourceNote: "Motorized blind content is custom written for Windzon while keeping the new catalogue-style experience consistent.",
                    types: [
                        typeSection("MB - Remote", "Remote Control Blind", "assets/img/window/01.jpg", "A motorized blind style built for convenient remote operation in everyday residential and office spaces.", ["Remote-based control", "Good for living rooms and offices", "Convenient daily use", "Suitable for wider openings", "Modern premium look", "Smooth movement intent"]),
                        typeSection("MB - Smart", "Smart Home Blind", "assets/img/window/01.jpg", "A connected blind type suited to automation-focused homes and high-end interiors.", ["Smart-home ready concept", "Ideal for premium homes", "Automation-focused use", "Suitable for designer interiors", "Convenient hands-free feel", "Modern technology-led positioning"]),
                        typeSection("MB - Signature", "Signature Motorized Series", "assets/img/window/01.jpg", "A premium motorized blind solution for top-tier residential and commercial design projects.", ["Luxury automation appeal", "Premium wide-glass suitability", "High-end interior fit", "Strong user convenience", "Designer project ready", "Elevated modern experience"])
                    ]
                })
            }
        }
    };

    function getCurrentProduct() {
        var categorySlug = query("category") || "windows";
        var itemSlug = query("item");
        var category = productCatalog[categorySlug] || productCatalog.windows;
        var itemMap = category.items;
        var firstKey = Object.keys(itemMap)[0];
        var item = itemMap[itemSlug] || itemMap[firstKey];

        return {
            categorySlug: productCatalog[categorySlug] ? categorySlug : "windows",
            category: category,
            item: item,
            itemSlug: itemMap[itemSlug] ? itemSlug : firstKey
        };
    }

    function setText(id, value) {
        var node = document.getElementById(id);
        if (node) {
            node.textContent = value;
        }
    }

    function setHtml(id, value) {
        var node = document.getElementById(id);
        if (node) {
            node.innerHTML = value;
        }
    }

    function setImage(id, src, alt) {
        var node = document.getElementById(id);
        if (node) {
            node.src = src;
            node.alt = alt;
        }
    }

    function renderList(id, items, iconClass) {
        setHtml(id, items.map(function (item) {
            return '<li><i class="' + iconClass + '"></i>' + item + "</li>";
        }).join(""));
    }

    function renderTypeNav(item) {
        setHtml("catalog-type-nav", item.types.map(function (type, index) {
            return '<a href="#type-section-' + index + '" class="catalog-type-chip">' + type.code + "</a>";
        }).join(""));
    }

    function renderTypeSections(item) {
        setHtml("catalog-type-sections", item.types.map(function (type, index) {
            var reverseClass = index % 2 === 0 ? " catalog-type-block-reverse" : "";
            var slides = type.images.map(function (imageSrc, imageIndex) {
                return '<div class="catalog-gallery-slide' + (imageIndex === 0 ? " active" : "") + '">' +
                    '<img src="' + imageSrc + '" alt="' + type.title + " image " + (imageIndex + 1) + '">' +
                "</div>";
            }).join("");
            var dots = type.images.map(function (_, imageIndex) {
                return '<button type="button" class="catalog-gallery-dot' + (imageIndex === 0 ? " active" : "") + '" data-slide-index="' + imageIndex + '" aria-label="Show image ' + (imageIndex + 1) + '"></button>';
            }).join("");
            return '' +
                '<section class="catalog-type-block' + reverseClass + '" id="type-section-' + index + '">' +
                    '<div class="catalog-type-card">' +
                        '<div class="row align-items-center g-4">' +
                            '<div class="col-lg-6">' +
                                '<div class="catalog-type-visual">' +
                                    '<span class="catalog-type-code">' + type.code + '</span>' +
                                    '<div class="catalog-gallery" data-gallery>' +
                                        '<div class="catalog-gallery-slides">' + slides + '</div>' +
                                        '<div class="catalog-gallery-dots">' + dots + '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="col-lg-6">' +
                                '<div class="catalog-type-copy">' +
                                    '<h3>' + type.title + '</h3>' +
                                    '<p>' + type.description + '</p>' +
                                    '<ul class="catalog-spec-list">' +
                                        type.specs.map(function (spec) {
                                            return '<li><i class="far fa-check-circle"></i><span>' + spec + '</span></li>';
                                        }).join("") +
                                    '</ul>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</section>';
        }).join(""));
    }

    function initTypeGalleries() {
        document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
            var slides = gallery.querySelectorAll(".catalog-gallery-slide");
            var dots = gallery.querySelectorAll(".catalog-gallery-dot");

            dots.forEach(function (dot) {
                dot.addEventListener("click", function () {
                    var nextIndex = Number(dot.getAttribute("data-slide-index"));

                    slides.forEach(function (slide, slideIndex) {
                        slide.classList.toggle("active", slideIndex === nextIndex);
                    });

                    dots.forEach(function (button, dotIndex) {
                        button.classList.toggle("active", dotIndex === nextIndex);
                    });
                });
            });
        });
    }

    function renderRelated(current) {
        var category = current.category;
        var itemSlug = current.itemSlug;
        var related = Object.keys(category.items)
            .filter(function (key) { return key !== itemSlug; })
            .slice(0, 6)
            .map(function (key) {
                return '<a href="product-detail.html?category=' + current.categorySlug + '&item=' + key + '" class="catalog-related-link">' + category.items[key].title + '<i class="far fa-arrow-right"></i></a>';
            });
        setHtml("catalog-related-links", related.join(""));
    }

    var current = getCurrentProduct();

    document.title = current.item.title + " | Windzon";

    setText("product-breadcrumb-title", current.item.title);
    setText("product-breadcrumb-current", current.item.title);

    ["product-category-page-link", "catalog-category-link"].forEach(function (linkId) {
        var categoryLink = document.getElementById(linkId);
        if (categoryLink) {
            categoryLink.href = current.category.pageUrl;
            if (linkId === "catalog-category-link") {
                categoryLink.innerHTML = "Back To " + current.category.label + '<i class="fas fa-arrow-right"></i>';
            } else {
                categoryLink.textContent = current.category.label;
            }
        }
    });

    setText("catalog-tagline", current.category.label + " " + current.item.tagline);
    setText("catalog-main-title", current.item.title);
    setText("catalog-intro", current.item.intro);
    setText("catalog-overview-title", current.item.overviewTitle);
    setText("catalog-overview-summary", current.item.overviewSummary);
    setText("catalog-cta-title", "Need support for " + current.item.title + "?");
    setText("catalog-cta-text", "Share your required size, finish, glazing, or system preference and we will guide you with the right solution for your project.");
    setText("catalog-source-note", current.item.sourceNote);
    setImage("catalog-overview-image", current.item.overviewImage, current.item.title);

    renderList("catalog-overview-points", current.item.overviewPoints, "far fa-check-circle");
    renderTypeNav(current.item);
    renderTypeSections(current.item);
    initTypeGalleries();
    renderRelated(current);
});
