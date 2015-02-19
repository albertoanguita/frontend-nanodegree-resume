/**
 * Created with IntelliJ IDEA.
 * User: Alberto
 * Date: 7/02/15
 * Time: 11:47
 * To change this template use File | Settings | File Templates.
 */



function getRelationship(x, y) {
    if (testNumber(x) && testNumber(y)) {
        if (x < y) {
            return "<";
        } else if (x > y) {
            return ">";
        } else {
            return "=";
        }
    } else if (!testNumber(x) && !testNumber(y)) {
        return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    } else {
        var notNumber;
//        console.log(typeof x);
//        console.log(typeof y);
        if (!testNumber(x)) {
            console.log("c1");
            notNumber = x;
        } else {
//            console.log("c2");
            notNumber = y;
        }
        return "Can't compare relationships because " + notNumber + " is not a number";
    }
}

function testNumber(x) {
    return typeof x === "number" && !isNaN(x);
}

//console.log(getRelationship(1,4));
//console.log(getRelationship(1,1));
//console.log(getRelationship("that",2));
//console.log(getRelationship("this"," something else"));
//console.log(getRelationship(3));
//console.log(getRelationship("hi"));
//console.log(getRelationship(NaN));
//console.log(getRelationship(NaN, undefined));


var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    // modify names
    for (i in names) {
        names[i] = reorderName(names[i]);
    }
    names.sort();
    return names;
}

function reorderName(name) {
    var nameLastName = name.split(" ");
    return nameLastName[1] + ", " + nameLastName[0];
}

// Try logging your results to test your code!
//console.log(alphabetizer(moonWalkers));


// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var array = [];
    var ruleResults = results.formattedResults.ruleResults;
    for (var property in ruleResults) {
        if (ruleResults.hasOwnProperty(property) && ruleResults[property].hasOwnProperty("localizedRuleName")) {
            array.push(ruleResults[property]["localizedRuleName"]);
        }
    }
    return array;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var bytes = 0;
    var stats = results.pageStats;
    for (var property in stats) {
        if (stats.hasOwnProperty(property) && endsWith(property, "Bytes")) {
            bytes += parseInt(stats[property]);
        }
    }
    return bytes;
}

function endsWith(str, end) {
    return str.length >= end.length && str.substring(str.length - end.length) === end;
}

psinsights = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [
                    {
                        "header": {
                            "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                            "args": [
                                {
                                    "type": "BYTES",
                                    "value": "1.3KiB"
                                },
                                {
                                    "type": "INT_LITERAL",
                                    "value": "0"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "717B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "1"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Minifying $1 could save $2 ($3% reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                                        },
                                        {
                                            "type": "BYTES",
                                            "value": "258B"
                                        },
                                        {
                                            "type": "INT_LITERAL",
                                            "value": "0"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
};


// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));