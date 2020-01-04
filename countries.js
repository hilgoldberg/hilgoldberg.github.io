
var countries = ['Republic of Hil', 'Goldbergistan', 'Hil"s Hill'
];

var countries = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: countries
});


$('#prefetch .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'countries',
  source: countries
});