var app = angular.module('my-modoner', ['ngRoute', 'ngMessages']);
app.run(function () {
    console.log("helloo");
});
app.controller('states', function ($scope) {
    $scope.states = [
        {
            name: "Assam",
            description: "The state is bordered by Bhutan and the state of Arunachal Pradesh to the north; Nagaland and Manipur to the east; Meghalaya, Tripura, Mizoram, and Bangladesh to the south; and West Bengal to the west via the Siliguri Corridor, a 22 kilometres (14 mi) strip of land which connects the state to the rest of India.",
            imageUrl: "images/assam.jpg"
        },
        {
            name: "Arunachal Pradesh",
            description: "Arunachal Pradesh borders the states of Assam and Nagaland to the south and shares international borders with Bhutan in the west, Myanmar in the east and is separated from China in the north by the disputed McMahon Line. Itanagar is the capital of the state.",
            imageUrl: "images/arunachal-pradesh.jpg"
        },
        {
            name: "Manipur",
            description: "The state covers an area of 22,327 square kilometres (8,621 sq mi) and has a population of almost 3 million, including the Meitei, who are the majority group in the state, Kuki, Naga, and Pangal peoples, who speak a variety of Sino-Tibetan languages. Manipur has been at the crossroads of Asian economic and cultural exchange for more than 2,500 years. It has long connected the Indian subcontinent to Southeast Asia, enabling migration of people, cultures and religions.",
            imageUrl: "images/manipur.jpg"
        },
        {
            name: "Meghalaya",
            description: "The state is bounded to the south by the Bangladeshi divisions of Mymensingh and Sylhet, to the west by the Bangladeshi division of Rangpur, and to the north and east by India's State of Assam. The capital of Meghalaya is Shillong. During the British rule of India, the British imperial authorities nicknamed it the Scotland of the East.Meghalaya was previously part of Assam, but on 21 January 1972, the districts of Khasi, Garo and Jaintia hills became the new state of Meghalaya. English is the official language of Meghalaya.",
            imageUrl: "images/meghalya.jpg"
        },
        {
            name: "Mizoram",
            description: "Mizoram is one of the states of Northeast India, with Aizawl as its capital city. The name is derived from Mizo and Ram and thus, Mizoram means Land of the Mizos.",
            imageUrl: "images/mizoram.jpg"
        },
        {
            name: "Nagaland",
            description: "Nagaland is a mountainous state in northeast India, bordering Myanmar. It's home to diverse indigenous tribes, with festivals and markets celebrating the different tribes' culture. Its capital city of Kohima suffered heavy fighting in World War II, commemorated by memorials at the Kohima War Cemetery. The Nagaland State Museum exhibits ancient weaponry, a ceremonial drum and other traditional Naga cultural artifacts.",
            imageUrl: "images/nagaland.jpg"
        },
        {
            name: "Sikkim",
            description: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. Steep paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700s.",
            imageUrl: "images/sikkim.jpg"
        },
        {
            name: "Tripura",
            description: "Tripura is a hilly state in northeast India, bordered on 3 sides by Bangladesh, and home to a diverse mix of tribal cultures and religious groups. In the capital Agartala, the imposing Ujjayanta Palace is set among Mughal gardens, and Gedu Mia’s Mosque has white marble domes and towers. South of the city, Neermahal summer palace sits in the middle of Lake Rudrasagar and blends Hindu and Islamic architectural styles.",
            imageUrl: "images/tripura.jpg"
        }
    ]
});
app.controller('sidebar', function ($scope) {
    $scope.activities = {
        "NLCPR": [
            {
                name: "Background",
                link: "#!/background"
            },
            {
                name: "Guidelines",
                link: "www.mdoner.gov.in/sites/default/files/NLCPR%20Guidelines6905826578.pdf"
            },
            {
                name: "Meetings",
                link: "#!/meetings"
            },
            {
                name: "Priority List & Retained Projects",
                link: "#!/priority"
            },
            {
                name: "Status of NLCPR Projects",
                link: "#!/status"
            },
            {
                name: "Graphical Overview on NLCPR",
                link: "#!/graphical"
            },
            {
                name: "BTC Pakage",
                link: "#!/btc"
            },
            {
                name: "Karbi Anglong Pakage",
                link: "#!/karbi"
            },
            {
                name: "Dima Hasao Pakage",
                link: "#!/dima"
            }
        ],

        "NLCPR CENTRAL": [
            {
                name: "Guidelines",
                link: "http://www.mdoner.gov.in/sites/default/files/NLCPR%20Guidelines6905826578.pdf"
            }, 
            {
                name: "Format for Proposing",
                link: "#!/format"
            },
            {
                name: "Projects",
                link: "#!/projects"
            },
            {
                name: "Meetings",
                link: "#!/meetings"
            }
        ],
        "Advocacy & Publicity": [
           
            {
                name: "NE Connect Issues",
                link: "#!/nec"
            },
            {
                name: "The Scheme",
                link: "#!/scheme"
            },
        ],
        "Capacity Building & Tchnical Assistance":[
            {
                name:"The Scheme",
                link:"#!/scheme"
            }
        ],
        "Externally Aided Projects": [
            {
                name:"ADB Road Project",
                link:"#!/adb"
            },
            {
                name:"MIS Project Portal",
                link:"#!/mis"
            },
            {
                name:"World Bank Livelihood Projects",
                link:"#!/world"
            },
            {
                name:"Releases",
                link:"#!/releases"
            },
            {
                name:"KfW Climate Change Project",
                link:"#!/kfw"
            },
            {
                name:"GiZ Climate Change Project",
                link:"#!/giz"
            },
            {
                name:"NEC-IFAD Livelihood Project",
                link:"#!/nec"
            },
        ],
        "NER Vision 2020": [
            {
                name:"Vision Document",
                link:"#!/vision"
            }
        ]
    }
});
app.controller('aboutus', function ($scope) {
    $scope.state = "hss";
    $scope.hss = "true";
    console.log("ctrl");
    $scope.setAct = function () {
        $scope.state = "act";
        $scope.act = "true";
        $scope.hss = "false";
        $scope.wwd = "false";
        $scope.abr = "false";
        $scope.md = "false";
    }
    $scope.setHss = function () {
        $scope.state = "hss";
        $scope.act = "false";
        $scope.hss = "true";
        $scope.wwd = "false";
        $scope.abr = "false";
        $scope.md = "false";
    }
    $scope.setWwd = function () {
        $scope.state = "wwd";
        $scope.act = "false";
        $scope.hss = "false";
        $scope.wwd = "true";
        $scope.abr = "false";
        $scope.md = "false";
    }
    $scope.setAbr = function () {
        $scope.state = "abr";
        $scope.act = "false";
        $scope.hss = "false";
        $scope.wwd = "false";
        $scope.abr = "true";
        $scope.md = "false";
    }
    $scope.setMd = function () {
        $scope.state = "md";
        $scope.act = "false";
        $scope.hss = "false";
        $scope.wwd = "false";
        $scope.abr = "false";
        $scope.md = "true";
    }
});
app.controller('publications', function ($scope) {
    $scope.state = "ar";
    $scope.ar = "true";
    console.log("ctrl");
    $scope.setAr = function () {
        $scope.state = "ar";
        $scope.ar = "true";
        $scope.eb = "false";
        $scope.bae = "false";
        $scope.ddg = "false";
    }
    $scope.setEb = function () {
        $scope.state = "eb";
        $scope.ar = "false";
        $scope.eb = "true";
        $scope.bae = "false";
        $scope.ddg = "false";
    }
    $scope.setBae = function () {
        $scope.state = "bae";
        $scope.ar = "false";
        $scope.eb = "false";
        $scope.bae = "true";
        $scope.ddg = "false";
    }
    $scope.setDdg = function () {
        $scope.state = "ddg";
        $scope.ar = "false";
        $scope.eb = "false";
        $scope.bae = "false";
        $scope.ddg = "true";
    }

});
app.controller('rti', function ($scope) {
    $scope.state = "mm";
    $scope.mm = "true";
    console.log("ctrl");
    $scope.setMm = function () {
        $scope.state = "mm";
        $scope.mm = "true";
        $scope.caa = "false";
    }
    $scope.setCaa = function () {
        $scope.state = "caa";
        $scope.mm = "false";
        $scope.caa = "true";
    }
});
app.controller('events', function ($scope) {
    $scope.state = "dna";
    $scope.dna = "true";
    console.log("ctrl");
    $scope.setDna = function () {
        $scope.state = "dna";
        $scope.dna = "true";
        $scope.ea = "false";
    }
    $scope.setEa = function () {
        $scope.state = "ea";
        $scope.dna = "false";
        $scope.ea = "true";
    }
});
app.config(function ($routeProvider, $httpProvider) {

    console.log("config");
    $routeProvider.when('/states', {
        templateUrl: 'states.html',
        controller: "states"
    });
    $routeProvider.when('/aboutus', {
        templateUrl: 'aboutus.html',
        controller: "aboutus"
    });
    $routeProvider.when('/rti', {
        templateUrl: 'rti.html',
        controller: "rti"
    });
    $routeProvider.when('/publications', {
        templateUrl: 'publications.html',
        controller: "publications"
    });
    $routeProvider.when('/events', {
        templateUrl: 'events.html',
        controller: "events"
    });
    $routeProvider.when('/', {
        templateUrl: 'aboutus.html',
        controller: 'aboutus'
    });
    $routeProvider.when('/background', {
        templateUrl: 'background.html'
    });
    $routeProvider.when('/meetings', {
        templateUrl: 'meetings.html'
    });
    $routeProvider.when('/contactUs', {
        templateUrl: 'contactus.html'
    });

    
});