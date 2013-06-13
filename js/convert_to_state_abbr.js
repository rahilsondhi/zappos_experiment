// Given a location string, scan location for a state name and return its abbreviation
var convertToStateAbbr = function(location) {
  var states = [
    {name:"Alabama", label:"Alabama",abbreviation:"AL"},
    {name:"Alaska", label:"Alaska",abbreviation:"AK"},
    {name:"American Samoa", label:"American Samoa",abbreviation:"AS"},
    {name:"Arizona", label:"Arizona",abbreviation:"AZ"},
    {name:"Arkansas", label:"Arkansas",abbreviation:"AR"},
    {name:"Armed Forces Europe", label:"Armed Forces Europe",abbreviation:"AE"},
    {name:"Armed Forces Pacific", label:"Armed Forces Pacific",abbreviation:"AP"},
    {name:"Armed Forces the Americas", label:"Armed Forces the Americas",abbreviation:"AA"},
    {name:"California", label:"California",abbreviation:"CA"},
    {name:"Colorado", label:"Colorado",abbreviation:"CO"},
    {name:"Connecticut", label:"Connecticut",abbreviation:"CT"},
    {name:"Delaware", label:"Delaware",abbreviation:"DE"},
    {name:"District of Columbia", label:"District of Columbia",abbreviation:"DC"},
    {name:"Federated States of Micronesia", label:"Federated States of Micronesia",abbreviation:"FM"},
    {name:"Florida", label:"Florida",abbreviation:"FL"},
    {name:"Georgia", label:"Georgia",abbreviation:"GA"},
    {name:"Guam", label:"Guam",abbreviation:"GU"},
    {name:"Hawaii", label:"Hawaii",abbreviation:"HI"},
    {name:"Idaho", label:"Idaho",abbreviation:"ID"},
    {name:"Illinois", label:"Illinois",abbreviation:"IL"},
    {name:"Indiana", label:"Indiana",abbreviation:"IN"},
    {name:"Iowa", label:"Iowa",abbreviation:"IA"},
    {name:"Kansas", label:"Kansas",abbreviation:"KS"},
    {name:"Kentucky", label:"Kentucky",abbreviation:"KY"},
    {name:"Louisiana", label:"Louisiana",abbreviation:"LA"},
    {name:"Maine", label:"Maine",abbreviation:"ME"},
    {name:"Marshall Islands", label:"Marshall Islands",abbreviation:"MH"},
    {name:"Maryland", label:"Maryland",abbreviation:"MD"},
    {name:"Massachusetts", label:"Massachusetts",abbreviation:"MA"},
    {name:"Michigan", label:"Michigan",abbreviation:"MI"},
    {name:"Minnesota", label:"Minnesota",abbreviation:"MN"},
    {name:"Mississippi", label:"Mississippi",abbreviation:"MS"},
    {name:"Missouri", label:"Missouri",abbreviation:"MO"},
    {name:"Montana", label:"Montana",abbreviation:"MT"},
    {name:"Nebraska", label:"Nebraska",abbreviation:"NE"},
    {name:"Nevada", label:"Nevada",abbreviation:"NV"},
    {name:"New Hampshire", label:"New Hampshire",abbreviation:"NH"},
    {name:"New Jersey", label:"New Jersey",abbreviation:"NJ"},
    {name:"New Mexico", label:"New Mexico",abbreviation:"NM"},
    {name:"New York", label:"New York",abbreviation:"NY"},
    {name:"North Carolina", label:"North Carolina",abbreviation:"NC"},
    {name:"North Dakota", label:"North Dakota",abbreviation:"ND"},
    {name:"Northern Mariana Islands", label:"Northern Mariana Islands",abbreviation:"MP"},
    {name:"Ohio", label:"Ohio",abbreviation:"OH"},
    {name:"Oklahoma", label:"Oklahoma",abbreviation:"OK"},
    {name:"Oregon", label:"Oregon",abbreviation:"OR"},
    {name:"Pennsylvania", label:"Pennsylvania",abbreviation:"PA"},
    {name:"Puerto Rico", label:"Puerto Rico",abbreviation:"PR"},
    {name:"Rhode Island", label:"Rhode Island",abbreviation:"RI"},
    {name:"South Carolina", label:"South Carolina",abbreviation:"SC"},
    {name:"South Dakota", label:"South Dakota",abbreviation:"SD"},
    {name:"Tennessee", label:"Tennessee",abbreviation:"TN"},
    {name:"Texas", label:"Texas",abbreviation:"TX"},
    {name:"Utah", label:"Utah",abbreviation:"UT"},
    {name:"Vermont", label:"Vermont",abbreviation:"VT"},
    {name: "Virgin Islands, U.S.",label:"Virgin Islands, U.S.",abbreviation:"VI"},
    {name:"Virginia", label:"Virginia",abbreviation:"VA"},
    {name:"Washington", label:"Washington",abbreviation:"WA"},
    {name:"West Virginia", label:"West Virginia",abbreviation:"WV"},
    {name:"Wisconsin", label:"Wisconsin",abbreviation:"WI"},
    {name:"Wyoming", label:"Wyoming",abbreviation:"WY"}
  ]

  var state = _.find(states, function(state) { return location.indexOf(state.name) >= 0 });
  if (state != undefined) { return state.abbreviation; } else { return null; }
}
