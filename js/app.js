var app=angular.module('my-modoner',['ngRoute','ngMessages']);
app.run(function(){
    console.log("helloo");
});
app.controller('states',function($scope){
    $scope.states={
        "assam":"The state is bordered by Bhutan and the state of Arunachal Pradesh to the north; Nagaland and Manipur to the east; Meghalaya, Tripura, Mizoram, and Bangladesh to the south; and West Bengal to the west via the Siliguri Corridor, a 22 kilometres (14 mi) strip of land which connects the state to the rest of India.",
        "arunachal pradesh":"Arunachal Pradesh borders the states of Assam and Nagaland to the south and shares international borders with Bhutan in the west, Myanmar in the east and is separated from China in the north by the disputed McMahon Line. Itanagar is the capital of the state.",
        "manipur":"The state covers an area of 22,327 square kilometres (8,621 sq mi) and has a population of almost 3 million, including the Meitei, who are the majority group in the state, Kuki, Naga, and Pangal peoples, who speak a variety of Sino-Tibetan languages. Manipur has been at the crossroads of Asian economic and cultural exchange for more than 2,500 years. It has long connected the Indian subcontinent to Southeast Asia, enabling migration of people, cultures and religions.",
        "meghalya":"The state is bounded to the south by the Bangladeshi divisions of Mymensingh and Sylhet, to the west by the Bangladeshi division of Rangpur, and to the north and east by India's State of Assam. The capital of Meghalaya is Shillong. During the British rule of India, the British imperial authorities nicknamed it the Scotland of the East.Meghalaya was previously part of Assam, but on 21 January 1972, the districts of Khasi, Garo and Jaintia hills became the new state of Meghalaya. English is the official language of Meghalaya.",
        "mizoram":"Mizoram is one of the states of Northeast India, with Aizawl as its capital city. The name is derived from Mizo and Ram and thus, Mizoram means Land of the Mizos.",
        "nagaland":"Nagaland is a mountainous state in northeast India, bordering Myanmar. It's home to diverse indigenous tribes, with festivals and markets celebrating the different tribes' culture. Its capital city of Kohima suffered heavy fighting in World War II, commemorated by memorials at the Kohima War Cemetery. The Nagaland State Museum exhibits ancient weaponry, a ceremonial drum and other traditional Naga cultural artifacts.",
        "sikkim":"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. Steep paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700s.",
        "tripura":"Tripura is a hilly state in northeast India, bordered on 3 sides by Bangladesh, and home to a diverse mix of tribal cultures and religious groups. In the capital Agartala, the imposing Ujjayanta Palace is set among Mughal gardens, and Gedu Mia’s Mosque has white marble domes and towers. South of the city, Neermahal summer palace sits in the middle of Lake Rudrasagar and blends Hindu and Islamic architectural styles."
    }
});
app.controller('sidebar',function($scope){
    $scope.activities={
        "NLCPR":{
            "background":"",
            "Guidelines":"",
            "Meetings":"",
            "Priority List & Retained Projects":"",
            "Status of NLCPR Projects":"",
            "Graphical Overview on NLCPR":"",
            "BTC Pakage":"",
            "Karbi Anglong Pakage":"",
            "Dima Hasao Pakage":""
        },
        "NLCPR CENTRAL":{
            "Guidelines":"",
            "Format for Proposing":"",
            "Projects":"",
            "Meetings":""
        },
        "Advocacy & Publicity":{
            "NE Connect Issues":"",
            "The Scheme":""
        },
        "Capacity Building & Tchnical Assistance":{
            "The Scheme":""
        },
        "Externally Aided Projects":{
            "ADB Road Project":"",
            "MIS Project Portal":"",
            "World Bank Livelihood Project":"",
            "Releases":"",
            "KfW Climate Change Project":"",
            "GiZ Climate Change Project":"",
            "NEC-IFAD Livelihood Project":""
        },
        "FM's NE Pakage -SIDF":{
            "Background":"",
            "Projects & Status":""
        },
        "10% GBS":{
            "Rationale":"",
            "FAQs":"",
            "Allocations & Expenditures":"",
            "Extempted Ministries":"",
            "Nodal Officers for NE in Non-Extempted Ministries":""
        },
        "NER Vision 2020":{
            "Vision Document":""
        }
    }
});
app.controller('aboutus',function($scope){
     
    console.log("ctrl");
    $scope.setAct=function(){
        $scope.state="act";
        $scope.act="true";
        $scope.hss="false";
        $scope.wwd="false";
        $scope.abr="false";
        $scope.md="false";
    }
    $scope.setHss=function(){
        $scope.state="hss";
        $scope.act="false";
        $scope.hss="true";
        $scope.wwd="false";
        $scope.abr="false";
        $scope.md="false";
    }
    $scope.setWwd=function(){
        $scope.state="wwd";
        $scope.act="false";
        $scope.hss="false";
        $scope.wwd="true";
        $scope.abr="false";
        $scope.md="false";
    }
    $scope.setAbr=function(){
        $scope.state="abr";
        $scope.act="false";
        $scope.hss="false";
        $scope.wwd="false";
        $scope.abr="true";
        $scope.md="false";
    }
    $scope.setMd=function(){
        $scope.state="md";
        $scope.act="false";
        $scope.hss="false";
        $scope.wwd="false";
        $scope.abr="false";
        $scope.md="true";
    }
});
app.config(function($routeProvider,$httpProvider){

    console.log("config");
    $routeProvider.when('/states',{
        templateUrl:'states.html',
        controller:"states"
    });
    $routeProvider.when('/aboutus',{
        templateUrl:'aboutus.html',
        controller:"aboutus"
    });
});