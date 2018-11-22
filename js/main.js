// global variable map
let map;
let markers =[];
let circles =[];
let mainmenudiv = $("#divmenu")
// CO2 api
const DATASET_QUERY_FORMAT = "http://api.eia.gov/series/?api_key=707c8ecbdbd34cbb75272c7a4256ca6b&series_id=EMISS.CO2-TOTV-TT-TO-MD.A";
const DATA_QUERY = "http://api.eia.gov/series/?api_key=707c8ecbdbd34cbb75272c7a4256ca6b&series_id="

const DATASETS_API_SERIES_ID = {
    "EMISS.CO2-TOTV-TT-TO-MD.A" : ["Maryland", {lat: 39.063946, lng: -76.802101}],
    "EMISS.CO2-TOTV-TT-TO-AL.A" : ["Alabama", {lat: 32.806671, lng: -86.791130}],
    "EMISS.CO2-TOTV-TT-TO-AK.A" : ["Alaska", {lat: 61.370716, lng: -152.404419}],
    "EMISS.CO2-TOTV-TT-TO-AZ.A" : ["Arizona", {lat: 33.729759, lng: -111.431221}],
    "EMISS.CO2-TOTV-TT-TO-AR.A" : ["Arkansas", {lat: 34.938067, lng: -92.311488}],
    "EMISS.CO2-TOTV-TT-TO-CA.A" : ["California", {lat: 36.116203, lng: -119.681564}],
    "EMISS.CO2-TOTV-TT-TO-CO.A" : ["Colorado", {lat: 39.059811, lng: -105.311104}],
    "EMISS.CO2-TOTV-TT-TO-CT.A" : ["Connecticut",{lat: 41.597782, lng: -72.755371} ],
    "EMISS.CO2-TOTV-TT-TO-DE.A" : ["Delaware", {lat: 39.318523, lng: -75.507141}] ,
    "EMISS.CO2-TOTV-TT-TO-DC.A" : ["District of Columbia", {lat: 38.897438, lng: -77.026817}],
    "EMISS.CO2-TOTV-TT-TO-FL.A" : ["Florida", {lat: 27.766279, lng: -81.686783}],
    "EMISS.CO2-TOTV-TT-TO-GA.A" : ["Georgia", {lat: 33.040619, lng: -83.643074}],
    "EMISS.CO2-TOTV-TT-TO-HI.A" : ["Hawaii", {lat: 21.094318, lng: -157.498337}],
    "EMISS.CO2-TOTV-TT-TO-ID.A" : ["Idaho", {lat: 44.240459, lng: -114.478828}],
    "EMISS.CO2-TOTV-TT-TO-IL.A" : ["Illinois", {lat: 40.349457, lng: -88.986137}],
    "EMISS.CO2-TOTV-TT-TO-IN.A" : ["Indiana", {lat: 39.849426, lng: -86.258278}],
    "EMISS.CO2-TOTV-TT-TO-IA.A" : ["Iowa", {lat: 42.011539, lng: -93.210526}],
    "EMISS.CO2-TOTV-TT-TO-KS.A" : ["Kansas", {lat: 38.526600, lng: -96.726486}],
    "EMISS.CO2-TOTV-TT-TO-KY.A" : ["Kentucky", {lat: 37.668140, lng: -84.670067}],
    "EMISS.CO2-TOTV-TT-TO-LA.A" : ["Louisiana", {lat: 31.169546, lng: -91.867805}],
    "EMISS.CO2-TOTV-TT-TO-ME.A" : ["Maine", {lat: 44.693947, lng: -69.381927}],
    "EMISS.CO2-TOTV-TT-TO-MA.A" : ["Massachusetts", {lat: 42.230171, lng: -71.530106}],
    "EMISS.CO2-TOTV-TT-TO-MI.A" : ["Michigan", {lat: 43.326618, lng: -84.536095}],
    "EMISS.CO2-TOTV-TT-TO-MN.A" : ["Minnesota", {lat: 45.694454, lng: -93.900192}],
    "EMISS.CO2-TOTV-TT-TO-MS.A" : ["Mississippi", {lat: 32.741646, lng: -89.678696}],
    "EMISS.CO2-TOTV-TT-TO-MO.A" : ["Missouri", {lat: 38.456085, lng: -92.288368}],
    "EMISS.CO2-TOTV-TT-TO-MT.A" : ["Montana", {lat: 46.921925, lng: -110.454353}],
    "EMISS.CO2-TOTV-TT-TO-NE.A" : ["Nebraska", {lat: 41.125370, lng: -98.268082}],
    "EMISS.CO2-TOTV-TT-TO-NV.A" : ["Nevada", {lat: 38.313515, lng: -117.055374}],
    "EMISS.CO2-TOTV-TT-TO-NH.A" : ["New Hampshire", {lat: 43.452492, lng: -71.563896}],
    "EMISS.CO2-TOTV-TT-TO-NJ.A" : ["New Jersey", {lat: 40.298904, lng: -74.521011}],
    "EMISS.CO2-TOTV-TT-TO-NM.A" : ["New Mexico", {lat: 34.840515, lng: -106.248482}],
    "EMISS.CO2-TOTV-TT-TO-NY.A" : ["New York", {lat: 42.165726, lng: -74.948051}],
    "EMISS.CO2-TOTV-TT-TO-NC.A" : ["North Carolina", {lat: 35.630066, lng: -79.806419}],
    "EMISS.CO2-TOTV-TT-TO-ND.A" : ["North Dakota", {lat: 47.528912, lng: -99.784012}],
    "EMISS.CO2-TOTV-TT-TO-OH.A" : ["Ohio", {lat: 40.388783, lng: -82.764915}],
    "EMISS.CO2-TOTV-TT-TO-OK.A" : ["Oklahoma", {lat: 35.565342, lng: -96.928917}],
    "EMISS.CO2-TOTV-TT-TO-OR.A" : ["Oregon", {lat: 44.572021, lng: -122.070938}],
    "EMISS.CO2-TOTV-TT-TO-PA.A" : ["Pennsylvania", {lat: 40.590752, lng: -77.209755}],
    "EMISS.CO2-TOTV-TT-TO-RI.A" : ["Rhode Island", {lat: 41.680893, lng: -71.511780}],
    "EMISS.CO2-TOTV-TT-TO-SC.A" : ["South Carolina", {lat: 33.856892, lng: -80.945007}],
    "EMISS.CO2-TOTV-TT-TO-SD.A" : ["South Dakota", {lat: 44.299782, lng: -99.438828}],
    "EMISS.CO2-TOTV-TT-TO-TN.A" : ["Tennessee", {lat: 35.747845, lng: -86.692345}],
    "EMISS.CO2-TOTV-TT-TO-TX.A" : ["Texas", {lat: 31.054487, lng: -97.563461}],
    "EMISS.CO2-TOTV-TT-TO-UT.A" : ["Utah", {lat: 40.150032, lng: -111.862434}],
    "EMISS.CO2-TOTV-TT-TO-VT.A" : ["Vermont", {lat: 44.045876, lng: -72.710686}],
    "EMISS.CO2-TOTV-TT-TO-VA.A" : ["Virginia", {lat: 37.769337, lng: -78.169968}],
    "EMISS.CO2-TOTV-TT-TO-WA.A" : ["Washington", {lat: 47.400902, lng: -121.490494}],
    "EMISS.CO2-TOTV-TT-TO-WV.A" : ["West Virginia", {lat: 38.491226, lng: -80.954453}],
    "EMISS.CO2-TOTV-TT-TO-WI.A" : ["Wisconsin", {lat: 44.268543, lng: -89.616508}],
    "EMISS.CO2-TOTV-TT-TO-WY.A" : ["Wyoming", {lat: 42.755966, lng: -107.302490}]
}
let keysarray = Object.keys(DATASETS_API_SERIES_ID);
//funtion to get data from the api
function getData(url,key) {
        let newurl = url+key;
        let response = $.get(newurl,() =>{
            putDataOnTable(response.responseJSON.series[0].data,DATASETS_API_SERIES_ID[key][0]);
        });    
}
function getYears(url,slc){
    let y = [];
    let response = $.get(url,() =>{
        response.responseJSON.series[0].data.forEach(function (i,value,a){
            slc.append(new Option(i[0],i[0]));
        });
    });
}
function getDataFromYear(url,year,key){
    let newurl = url+key;
    let num = 2014-parseInt(year);
    let co;
    let response = $.get(newurl,() =>{
        putCircleOnMap(response.responseJSON.series[0].data[num][1],key);
    });    
}

function putCircleOnMap(data,key){
    let latlong = DATASETS_API_SERIES_ID[key][1],
    radius = data*1000;
    var cityCircle = new google.maps.Circle({
        strokeColor: '#4C46FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#4C46FF',
        fillOpacity: 0.35,
        map: map,
        center: latlong,
        radius: radius
    });
    circles.push(cityCircle);
}
function putDataOnTable(data,city){
    // put the table structure
    //main div
    // console.log(city)
    // console.log($("#tableWrapper").length >0)
    
    // div = document.getElementById("divmenu");
    // div.innerHTML += '<div id="tableWrapper"><div class="table-wrapper-scroll-y"><table class="table table-bordered table-striped"><thead class="thead-dark"><tr><th colspan="2"> Total carbon dioxide emissions from all sectors, all fuels. </th>	</tr><tr><th> Year </th><th> Emission (million metric tons CO2) </th></tr></thead><tbody id="mainTableBody"></tbody></table></div></div>';
    if($("#tableWrapper").length > 0){
        // console.log("if")
        $("#titletable").text("Total carbon dioxide emissions on " + city)
        const tableBody = $('#mainTableBody')[0];
        tableBody.innerHTML =""
        var newRow, year, amount;	
        for(var item of data){
            // console.log(item)
            newRow = tableBody.insertRow(tableBody.rows.length);
            year = newRow.insertCell(0);
            amount = newRow.insertCell(1);
            year.innerHTML = item[0];
            amount.innerHTML = item[1];
        }
    }else{
        putTheElements(city)
        const tableBody = $('#mainTableBody')[0];
        var newRow, year, amount;	
        for(var item of data){
            // console.log(item)
            newRow = tableBody.insertRow(tableBody.rows.length);
            year = newRow.insertCell(0);
            amount = newRow.insertCell(1);
            year.innerHTML = item[0];
            amount.innerHTML = item[1];
        }
    }
    if($("slcyear").length > 0){
        
    }

    addGraph(data);
}

//put the elements
function putTheElements(city){
    a= $("#divmenu")
    let divtable = $("<div>", {id: "tableWrapper", "class": "a"});
    let scroll = $("<div>",{class:"table-wrapper-scroll-y"});
    let maintable = $("<table>",{class:"table table-bordered table-striped"})
    let thead = $("<thead>",{class:"thead-dark"})
    let tr1 = $("<tr>",{class:"tr"})
    let th1 = $("<th>",{id:"titletable",colspan:"2",class:"th"})
    th1.text("Total carbon dioxide emissions on " + city)
    let tr2 = $("<tr>",{class:"tr"})
    let th21 = $("<th>",{class:"th"})
    let th22 = $("<th>",{class:"th"})
    th21.text("Year")
    th22.text("Emission (million metric tons CO2)")
    let tbody = $("<tbody>",{id:"mainTableBody"})
    tr1.append(th1)
    tr2.append(th21)
    tr2.append(th22)
    divtable.append(scroll);
    scroll.append(maintable);
    thead.append(tr1)
    thead.append(tr2)
    maintable.append(thead);
    maintable.append(tbody);
    a.append(divtable)
}
//main
$(document).ready(function(){
    fillselect();    
});

//init the map
function initMap(){
    let mapStyle = [{
        'stylers': [{'visibility': 'off'}]
      }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
      }, {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [{'visibility': 'on'}, {'color': '#bfd4ff'}]
      }];
    map = new google.maps.Map(document.getElementById("map"),{
        //center on the us
        center: {lat: 40, lng: -100},
        // center: {lat: 41.850033, lng:-87.6500523},
        //show the country
        zoom: 4,
        // styles:mapStyle
    });
}

// put the circles on the map

//move the map
function movemap(coo,c){
    // console.log(coo)
    deleteMarkers();
    let myLatLng = {lat: coo['lat'],lng: (coo['lng']-5)};
    let marklatlng = {lat: coo['lat'],lng: coo['lng']}
    var center = new google.maps.LatLng(myLatLng);
    // using global variable:
    map.panTo(center);
    addMarker(marklatlng);
    map.setZoom(6)
}
//put the map on zoom again
function resetmap(){
    let myLatLng = {lat: 40, lng: -110}
    var center = new google.maps.LatLng(myLatLng);
    map.panTo(center);
    map.setZoom(4);
    deleteMarkers();
}
//put the circles
function putCircles(year){
    let data = {};
    keysarray.forEach((v,i,a) => {
        // console.log(v);
        data[v] = getDataFromYear(DATA_QUERY,year,v);
    });
}
//remove circles
function deleteCircles(){
    for (var i = 0; i < circles.length; i++) {
        circles[i].setMap(null);
      }
}
// Adds a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    markers.push(marker);
  }
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
  }
//fill the select 
function fillselect(){
    // get the select
    let select = document.getElementById("slccountry");
    let countrykeys = Object.keys(DATASETS_API_SERIES_ID);
    countrykeys.forEach(function (i,value,a){
        let cityname = DATASETS_API_SERIES_ID[i][0];
        select.append(new Option(cityname,i));
    });
};
// fill the years
function fillYears(){
    let select = $("#slcyear")
    getYears(DATASET_QUERY_FORMAT,select);
}
// on change the select 
$("#slccountry").change(() => {
    let valkey = $("#slccountry").find(":selected").val();
    if(valkey =="All"){
        resetmap();
        let div = $("#tableWrapper");
        div.remove();
        div = $("#graphicmenu");
        div.remove();
        if($("#slcyear").length == 0){
            let select = $("<select>", {id: "slcyear", "class": "custom-select custom-select-lg mb-30",name:"year-selector"});
            let o = $("<option>",{value:"Year",text:"Year"})
            select.append(o)
            mainmenudiv.append(select);
        }
        fillYears();
        $("#slcyear").change(() =>{
            // console.log("change year")
            let valkey = $("#slcyear").find(":selected").val();
            deleteCircles();
            putCircles(valkey);
        })
    }else{
        let ys = $("#slcyear");
        ys.remove();
        let coords = DATASETS_API_SERIES_ID[valkey][1];
        let city = DATASETS_API_SERIES_ID[valkey][0];
        getData(DATA_QUERY,valkey);
        movemap(coords);
    }
    
})




//add the graph
function addGraph(dataf){
    // let w = #
    // console.log($("#graphicmenu").length)
    if(!($("#graphicmenu").length>0 )){
        let gdiv = $("<div>",{class:"graphic",id:"graphicmenu"});
        $("#divmenu").append(gdiv);
    }else{
        // console.log("else")
        $("svg").remove()
    }
    
    let w = $("#graphicmenu").width();
    let h = $("#tableWrapper").height()+100;
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 50, left: 25},
    width = w - margin.left - margin.right,
    height = h - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleBand()
        .range([0, width])
        .padding(0.2);
    var y = d3.scaleLinear()
        .range([height, 0]);
        
    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#graphicmenu").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
        "translate(" + margin.left + "," + margin.top + ")");

    let dataobject = []
    let p =0;
    dataobject["columns"] = ["year","co"]
    dataf.forEach((a) => {
        let tem ={}
        tem["year"] = a[0];
        tem["co"] = a[1];
        dataobject[p] = tem;
        p++;
    });
    dataobject = dataobject.reverse();
    // console.log(data[0])
    // console.log(dataf)
    // console.log(dataobject)
    // Scale the range of the data in the domains
    x.domain(dataobject.map(function(d) { return d.year; }));
    y.domain([0, d3.max(dataobject, function(d) { return d.co; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
    .data(dataobject)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("fill","#4C46FF")
    .attr("x", function(d) { return x(d.year); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.co); })
    .attr("height", function(d) { return height - y(d.co); });

    // add the x Axis
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    // .attr("transform","rotate(90)")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(90)")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "start");

    // add the y Axis
    svg.append("g")
    .call(d3.axisLeft(y));

}

