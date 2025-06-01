(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

// Language translations
const translations = {
    en: {
        home: "Home",
        about: "About",
        gallery: "Our Gallery",
        maps: "Maps",
        tour: "Tours",
        search: "Search",
        welcome: "Welcome to Sigiriya",
        sigiriya: "Sigiriya",
        des1:"Sigiriya is one of Sri Lanka’s most iconic UNESCO World Heritage Sites, attracting visitors from around the globe with its majestic rock palace, ancient frescoes, and breathtaking views. With increasing popularity comes the need for responsible tourism and effective visitor management.",
        des2:"Our mission is to preserve the heritage of Sigiriya while enhancing the experience for every visitor. This website has been designed to manage visitor flow through a convenient time-slot booking system, reduce overcrowding, and ensure your visit is smooth, enjoyable, and safe.",
        point1:"Ancient Rock Fortress",
        point2:"UNESCO World Heritage Site",
        point3:"Height of 200 Meters",
        point4:"Frescoes & Mirror Wall",
        point5:"Advanced Hydraulic Systems",
        point6:"Lion’s Gate Entrance",
        readmore: "Read More",
        exploretours: "Explore Tours",
        otharound: "Other things to do around Sigiriya.",
        pidurangala: "Pidurangala",
        minneriya: "Minneriya National Park",
        dabulla: "Dambulla Cave Temple",
        paragliding: "Paragliding over Paradise",
        hotair: "Hot Air Ballooning",
        cycling: "Cycling around Sigiriya",
        totg: "Tourism & Traveling Gallery.",
        travelguide: "Travel Guide",
        meetour: "Meet Our Guide",
        visitors: "Visitors: ",
        getin: "Get in Touch",
        adds: "Sigiriya, Central Province, Sri Lanka",
        company: "Company",
        support: "Support",
        contact: "Contact Us",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contactany: "Contact For Any Query",
        mobile: "Mobile",
        email: "Email",
        sendmsg: "Send us a message",
        onlinebooking: "Online Booking",
        etickert: "eTicket reservation for Sigiriya",
        local: "Local",
        foreign: "Foreign",
        book: "Book Tickets",
        nic: "NIC",
        name: "Name",
        address: "Address",
        visti: "Select Visiting Hours",
        vis: "Visiting Hours",
        adults: "Adults",
        children: "Children",
        bookfor: "Book Tickets (Foreign)",
        passport: "Passport No",
        country: "Country",
        selectcountry: "Select Country",

        // Add all other text keys and English values here
    },
    si: {
        home: "මුල් පිටුව",
        about: "අපි ගැන",
        maps: "සිතියම",
        gallery: "අපගේ ගැලරිය",
        tour: "සංචාර",
        search: "සොයන්න",
        welcome: "ආයුබෝවන් සිගිරිය",
        sigiriya: "සිගිරිය",
        des1: "සිගිරිය ශ්‍රී ලංකාවේ අතිශය ප්‍රසිද්ධ යුනෙස්කෝ ලෝක උරුම ස්ථානයක් වන අතර, එහි අතිවිශාල ගල් මාලිගාව, පුරාණ චිත්‍රපට සහ අලංකාර දර්ශන සමඟ ලොව පුරා සිටින සංචාරකයින්ගේ අවධානය දිනාගෙන ඇත. ජනප්‍රියත්වය වැඩි වීමත් සමඟ, වගකීමෙන් යුතු සංචාරකත්වය සහ කාර්යක්ෂම සංචාරක කළමනාකරණය අවශ්‍ය වේ.",
        des2: "සිගිරියාවේ උරුමය රැක ගැනීමත්, සෑම සංචාරකයෙකුටම අත්දැකීම වැඩි දියුණු කිරීමත් අපගේ මෙහෙවරයි. මෙම වෙබ් අඩවිය සංචාරක ප්‍රවාහය පහසු කාල-ස්ලොට් වෙන්කර ගැනීමේ පද්ධතියක් හරහා කළමනාකරණය කිරීමට, අතිරික්ත ජනහීනය අවම කිරීමට සහ ඔබගේ සංචාරය සුමට, සතුටුදායක සහ ආරක්ෂිත බවට පත් කිරීමට නිර්මාණය කර ඇත.",
        point1: "පුරාණ ගල් මාලිගාව",
        point2: "යුනෙස්කෝ ලෝක උරුම ස්ථානය",
        point3: "200 මීටර් උස",
        point4: "බිතුසිතුවම් සහ කැඩපත් බිත්තිය",
        point5: "ඉහළ තාක්ෂණික ජල පද්ධති",
        point6: "සිංහ දොරටුව",
        readmore: "තවත් කියවන්න",
        exploretours: "සංචාර පරීක්ෂා කරන්න",
        otharound: "සිගිරිය ආසන්නයේ වෙනත් කරුණු.",
        pidurangala: "පිදුරංගල",
        minneriya: "මිනේරිය ජාතික උද්‍යානය",
        dabulla: "දඹුල්ල පුරාණ මැදුර",
        paragliding: "පාරාදීසය මත පැරග්ලයිඩින් කිරීම",
        hotair: "උණුසුම් වායු බැලූන",
        cycling: "සිගිරිය වටා සයිකලින්",
        totg: "සංචාරකත්වය සහ සංචාරක ගැලරිය.",
        travelguide: "සංචාරක මාර්ගෝපදේශය",
        meetour: "අපගේ මාර්ගෝපදේශකයින් හමුවන්න",
        visitors: "සංචාරකයින්: ",
        getin: "අප හා සම්බන්ධ වන්න",
        adds: "සිගිරිය, මධ්‍යම පළාත, ශ්‍රී ලංකාව",
        company: "සමාගම",
        support: "සහාය",
        contact: "අප අමතන්න",
        privacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
        terms: "සේවා කොන්දේසි",
        contactany: "ඕනෑම ප්‍රශ්නයකට සම්බන්ධ වන්න",
        mobile: "ජංගම දුරකථනය",
        email: "ඊමේල්",
        sendmsg: "අපට පණිවිඩයක් යවන්න",
        onlinebooking: "ඔන්ලයින් වෙන්කර ගැනීම",
        etickert: "සිගිරිය සඳහා eTicket වෙන්කර ගැනීම",
        local: "දේශීය",
        foreign: "විදේශීය",
        book: "ටිකට්පත් වෙන්කර ගන්න",
        nic: "ජාතික හැඳුනුම්පත",
        name: "නම",
        address: "ලිපිනය",
        visti: "සංචාරක පැමිණීමේ වේලාව තෝරන්න",
        vis: "සංචාරක පැමිණීමේ වේලාව",
        adults: "වැඩිහිටියන්",
        children: "දරුවන්",
        bookfor: "ටිකට්පත් වෙන්කර ගන්න (විදේශීය)",
        passport: "ගමන් බලපත්‍ර අංකය",
        country: "රට",
        selectcountry: "රට තෝරන්න",

        // Add all other text keys and Sinhala values here
    }
};

// Function to switch language
function switchLanguage(lang) {
    $('[data-i18n]').each(function() {
        const key = $(this).data('i18n');
        if (translations[lang][key]) {
            $(this).text(translations[lang][key]);
        }
    });
}

// Language button handler
$('.lang-select').click(function(e) {
    e.preventDefault();
    const lang = $(this).data('lang');
    switchLanguage(lang);
});

// Visitor Count Display Functionality - Top Left Corner
document.addEventListener('DOMContentLoaded', function() {
    const visitorDisplay = document.getElementById('visitorDisplay');
    const visitorCountElement = document.getElementById('visitorCount');
    
    // Generate random visitor count between 500-1500
    function generateRandomVisitorCount() {
        return Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    }
    
    // Update visitor count with animation
    function updateVisitorCount() {
        const count = generateRandomVisitorCount();
        
        // Add updating animation class
        visitorCountElement.classList.add('updating');
        
        // Update the count
        visitorCountElement.textContent = count;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            visitorCountElement.classList.remove('updating');
        }, 600);
    }
    
    // Show visitor display immediately with initial count
    function showVisitorDisplay() {
        updateVisitorCount();
        visitorDisplay.style.display = 'block';
    }
    
    // Initialize display after 2 seconds
    setTimeout(showVisitorDisplay, 2000);
    
    // Update count every 10 seconds
    setInterval(updateVisitorCount, 10000);
    
    // Optional: Hide on scroll down, show on scroll up (for better UX)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - fade out slightly
            visitorDisplay.style.opacity = '0.7';
        } else {
            // Scrolling up - full opacity
            visitorDisplay.style.opacity = '1';
        }
        lastScrollTop = scrollTop;
    });
});

