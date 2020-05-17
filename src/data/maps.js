export function getExpressWayList() {
  //const total = [];
  expressWayList.forEach(expressWay => {
    //total.push(expressWay.name.replace(/^\s+|^\d|\s+$/gm,'').trim());
    expressWay.name = expressWay.name.replace(/^\s+|^\d|\s+$/gm,'').trim();
    expressWay.toString = () => {
      return expressWay.name;
    };
    expressWay.chunks.forEach(chunk => {
      console.log(chunk.name);

      chunk.name_a = null;
      chunk.name_b = null;
      const namePart = chunk.name.split(' - ');
      if (namePart.length > 1) {
        chunk.name_a = namePart[0];
        chunk.name_b = namePart[1];
      }
    });
  });
  return expressWayList;
}

/*export function getExpressWay() {
  mapsDataList[0].chunks.forEach(chunk => {
    chunk.name_a = null;
    chunk.name_b = null;
    const namePart = chunk.name.split(' - ');
    if (namePart.length > 1) {
      chunk.name_a = namePart[0];
      chunk.name_b = namePart[1];
    }
  });

  return mapsDataList[0];
}*/

const expressWayList = [
  {
    "id": 1,
    "name": "1 ทางพิเศษเฉลิมมหานคร",
    "traffic_index": 0.8367469879518075,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 105,
        "name": "ดาวคะนอง - สุขสวัสดิ์",
        "points": [
          {
            "point_id": 182,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 190,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 191,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1328,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1330,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 106,
        "name": "ด่านเก็บค่าผ่านทางพิเศษดาวคะนอง",
        "points": [
          {
            "point_id": 1329,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.3,
        "chunk_id": 107,
        "name": "ไป s1",
        "points": [
          {
            "point_id": 211,
            "traffic_index": 0.3,
            "status": "red"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 108,
        "name": "ทางลงบางจาก",
        "points": [
          {
            "point_id": 1961,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 109,
        "name": "ทางเข้าทางพิเศษศรีรัช",
        "points": [
          {
            "point_id": 1336,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 110,
        "name": "สุขสวัสดิ์ - สาธุประดิษฐ์",
        "points": [
          {
            "point_id": 183,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 184,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 192,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 195,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 196,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 197,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 198,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 199,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1331,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1332,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1333,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1334,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1335,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 111,
        "name": "สาธุประดิษฐ์ - เลียบแม่น้ำ(พระราม3)",
        "points": [
          {
            "point_id": 202,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 203,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1337,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 112,
        "name": "เลียบแม่น้ำ(พระราม3) - ท่าเรือ",
        "points": [
          {
            "point_id": 185,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 186,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 205,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 206,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1338,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1339,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1340,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 113,
        "name": "ท่าเรือ - อาจณรงค์",
        "points": [
          {
            "point_id": 209,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1342,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1343,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 114,
        "name": "อาจณรงค์ - สุขุมวิท 62",
        "points": [
          {
            "point_id": 188,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 210,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1344,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1345,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1346,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1347,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1348,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 115,
        "name": "ทางขึ้นดาวคะนอง",
        "points": [
          {
            "point_id": 181,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 116,
        "name": "ด่านเก็บค่าผ่านทางพิเศษดินแดง 1",
        "points": [
          {
            "point_id": 1359,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 117,
        "name": "ดินแดง - เพชรบุรี",
        "points": [
          {
            "point_id": 213,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 215,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 219,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 220,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1358,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1360,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1361,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1362,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 118,
        "name": "เพชรบุรี - สุขุมวิท",
        "points": [
          {
            "point_id": 221,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 222,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 119,
        "name": "ทางลงเพชรบุรี (B)",
        "points": [
          {
            "point_id": 1380,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 120,
        "name": "สุขุมวิท - พระราม 4",
        "points": [
          {
            "point_id": 216,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 223,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 224,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 226,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1363,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1364,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1365,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 121,
        "name": "ทางขึ้นพระราม 3",
        "points": [
          {
            "point_id": 1368,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 122,
        "name": "พระราม 4 - สุขุมวิท",
        "points": [
          {
            "point_id": 1372,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1373,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1374,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1375,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1376,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 123,
        "name": "สุขุมวิท - เพชรบุรี",
        "points": [
          {
            "point_id": 1377,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 124,
        "name": "เพชรบุรี - ดินแดง",
        "points": [
          {
            "point_id": 1379,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1381,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1382,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1383,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1384,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1385,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1386,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 125,
        "name": "สุขุมวิท 62 - อาจณรงค์",
        "points": [
          {
            "point_id": 1398,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1399,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1400,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1401,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1402,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1403,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1404,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2253,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 126,
        "name": "อาจณรงค์ - ท่าเรือ",
        "points": [
          {
            "point_id": 1405,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1406,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1407,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1409,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 127,
        "name": "ท่าเรือ  - เลียบแม่น้ำ(พระราม3)",
        "points": [
          {
            "point_id": 1412,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1413,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1414,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1415,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1416,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1417,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1418,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1419,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1421,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1422,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 128,
        "name": "เลียบแม่น้ำ(พระราม3) - สาธุประดิษฐ์",
        "points": [
          {
            "point_id": 1423,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1424,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1425,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1426,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1427,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1429,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 129,
        "name": "สาธุประดิษฐ์ - สุขสวัสดิ์",
        "points": [
          {
            "point_id": 1431,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1432,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1433,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1434,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1435,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1436,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1437,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1438,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1439,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1440,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1441,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1442,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1443,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1444,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1445,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 130,
        "name": "สุขสวัสดิ์ - ดาวคะนอง",
        "points": [
          {
            "point_id": 1446,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1447,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1448,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1449,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 156,
        "name": "ทางลงโยธินพัฒนา",
        "points": [
          {
            "point_id": 1568,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 158,
        "name": "ทางลงลาดพร้าว",
        "points": [
          {
            "point_id": 1574,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 160,
        "name": "ทางขึ้นประชาอุทิศ",
        "points": [
          {
            "point_id": 1580,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 162,
        "name": "ทางขึ้นโยธินพัฒนา",
        "points": [
          {
            "point_id": 153,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 164,
        "name": "ทางขึ้นลาดพร้าว",
        "points": [
          {
            "point_id": 159,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 166,
        "name": "ทางลงประชาอุทิศ",
        "points": [
          {
            "point_id": 1557,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 175,
        "name": "ทางขึ้นพระโขนง(สุขุมวิท 50)",
        "points": [
          {
            "point_id": 1605,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 176,
        "name": "สุขุมวิท62 - พระโขนง(สุขุมวิท 50)",
        "points": [
          {
            "point_id": 1606,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1607,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1608,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 180,
        "name": "ทางลงพระโขนง(สุขุมวิท50)",
        "points": [
          {
            "point_id": 1642,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8666666666666667,
        "chunk_id": 181,
        "name": "พระโขนง(สุขุมวิท 50) - สุขุมวิท 62",
        "points": [
          {
            "point_id": 2187,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2188,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2189,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 267,
        "name": "ทางลงบางพลี1",
        "points": [
          {
            "point_id": 254,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 269,
        "name": "ทางขึ้นบางพลี2",
        "points": [
          {
            "point_id": 1936,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 285,
        "name": "ทางขึ้นบางพลี1",
        "points": [
          {
            "point_id": 1985,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 287,
        "name": "ทางลงบางพลี2",
        "points": [
          {
            "point_id": 1976,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 289,
        "name": "ทางลงเมืองใหม่บางพลี",
        "points": [
          {
            "point_id": 269,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 290,
        "name": "ทางขึ้นเมืองใหม่บางพลี",
        "points": [
          {
            "point_id": 2142,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 305,
        "name": "ทางขึ้นบางวัว",
        "points": [
          {
            "point_id": 308,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 306,
        "name": "ทางลงบางวัว",
        "points": [
          {
            "point_id": 2183,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 319,
        "name": "ทางลงสุขุมวิท 62",
        "points": [
          {
            "point_id": 2251,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 440,
        "name": "ทางขึ้นสาธุประดิษฐ์ (A)",
        "points": [
          {
            "point_id": 201,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 441,
        "name": "ทางขึ้นเลียบแม่น้ำ (พระราม3) (A)",
        "points": [
          {
            "point_id": 204,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 442,
        "name": "ทางลงเลียบแม่น้ำ (พระราม3) (B)",
        "points": [
          {
            "point_id": 1420,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 443,
        "name": "ทางลงสาธุประดิษฐ์ (B)",
        "points": [
          {
            "point_id": 1428,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 444,
        "name": "ทางลงสาธุประดิษฐ์ (A)",
        "points": [
          {
            "point_id": 200,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 445,
        "name": "ทางขึ้นสาธุประดิษฐ์ (B)",
        "points": [
          {
            "point_id": 1430,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 446,
        "name": "ทางลงท่าเรือ (A)",
        "points": [
          {
            "point_id": 187,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 447,
        "name": "ทางขึ้นท่าเรือ (B)",
        "points": [
          {
            "point_id": 1411,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 448,
        "name": "ทางขึ้นท่าเรือ (A)",
        "points": [
          {
            "point_id": 1341,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 449,
        "name": "ทางลงท่าเรือ (B)",
        "points": [
          {
            "point_id": 1410,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 450,
        "name": "ทางขึ้นอาจณรงค์ (B)",
        "points": [
          {
            "point_id": 1408,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 451,
        "name": "ทางลงอาจณรงค์ (A)",
        "points": [
          {
            "point_id": 208,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 454,
        "name": "ทางขึ้นสุขุมวิท (B)",
        "points": [
          {
            "point_id": 1378,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 455,
        "name": "ทางขึ้นพระรามที่ 4 (B)",
        "points": [
          {
            "point_id": 1371,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 456,
        "name": "ทางลงพระรามที่ 4 (A)",
        "points": [
          {
            "point_id": 217,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 457,
        "name": "ทางขึ้นพระรามที่ 4 (A)",
        "points": [
          {
            "point_id": 225,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1370,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 458,
        "name": "ทางลงพระรามที่ 4 (B)",
        "points": [
          {
            "point_id": 1369,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 459,
        "name": "ทางขึ้นเพชรบุรี (A)",
        "points": [
          {
            "point_id": 214,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 500,
        "name": "ทางขึ้นสุขุมวิท 62",
        "points": [
          {
            "point_id": 2252,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 3,
    "name": "ทางพิเศษฉลองรัช",
    "traffic_index": 0.8117647058823527,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 77,
        "name": "ถนนกาญจนาภิเษก - เส้นใน",
        "points": [
          {
            "point_id": 458,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 91,
        "name": "จตุโชติ - สุขาภิบาล 5",
        "points": [
          {
            "point_id": 1526,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1527,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1528,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1529,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1530,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1531,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1532,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1533,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 92,
        "name": "สุขาภิบาล 5 - รามอินทรา",
        "points": [
          {
            "point_id": 1535,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1537,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1538,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1539,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1540,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1541,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1542,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1543,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1544,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 93,
        "name": "ทางขึ้นรามอินทรา (B)",
        "points": [
          {
            "point_id": 1522,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 94,
        "name": "รามอินทรา - โยธินพัฒนา",
        "points": [
          {
            "point_id": 1546,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1547,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1552,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1553,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1554,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1555,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1562,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1563,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1564,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1565,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1566,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1567,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 95,
        "name": "สุขาภิบาล 5 - จตุโชติ",
        "points": [
          {
            "point_id": 124,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 128,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 129,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 130,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 131,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 132,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 134,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 135,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 136,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 137,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 138,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 139,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 140,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 97,
        "name": "รามอินทรา - สุขาภิบาล 5",
        "points": [
          {
            "point_id": 125,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 126,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 142,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 143,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 144,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 145,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1263,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1519,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1520,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 99,
        "name": "โยธินพัฒนา - รามอินทรา",
        "points": [
          {
            "point_id": 146,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 148,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 149,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 150,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 151,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 152,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1548,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1549,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1550,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1551,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 146,
        "name": "ทางลงสุขาภิบาล 5  (A)",
        "points": [
          {
            "point_id": 1534,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 147,
        "name": "ทางขึ้นสุขาภิบาล 5 (A)",
        "points": [
          {
            "point_id": 1536,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 148,
        "name": "ทางลงรามอินทรา (A)",
        "points": [
          {
            "point_id": 1545,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 157,
        "name": "ลาดพร้าว - โยธินพัฒนา",
        "points": [
          {
            "point_id": 154,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 155,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 156,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 157,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 158,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8571428571428571,
        "chunk_id": 159,
        "name": "ประชาอุทิศ - ลาดพร้าว",
        "points": [
          {
            "point_id": 147,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 160,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 161,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 162,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 163,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 164,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1556,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 163,
        "name": "โยธินพัฒนา - ลาดพร้าว",
        "points": [
          {
            "point_id": 1569,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1570,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1571,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1572,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1573,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 165,
        "name": "ลาดพร้าว - ประชาอุทิศ",
        "points": [
          {
            "point_id": 1575,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1576,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1577,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1578,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1579,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 167,
        "name": "พระราม 9-2 - ประชาอุทิศ",
        "points": [
          {
            "point_id": 165,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1558,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1559,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1560,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1561,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 168,
        "name": "ประชาอุทิศ - พระราม 9-2",
        "points": [
          {
            "point_id": 1581,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1582,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1583,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1584,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1585,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1586,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 170,
        "name": "ทางลงพระราม 9-2 (A)",
        "points": [
          {
            "point_id": 1627,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9,
        "chunk_id": 171,
        "name": "พัฒนาการ - พระราม 9-2",
        "points": [
          {
            "point_id": 167,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 174,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 175,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1603,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 172,
        "name": "ทางขึ้นพัฒนาการ (B)",
        "points": [
          {
            "point_id": 176,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 173,
        "name": "ทางลงพัฒนาการ (B)",
        "points": [
          {
            "point_id": 168,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 174,
        "name": "พระโขนง(สุขุมวิท 50) - พัฒนาการ",
        "points": [
          {
            "point_id": 169,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 170,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 177,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 178,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 179,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 180,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1604,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 177,
        "name": "พระราม 9-2 - พัฒนาการ",
        "points": [
          {
            "point_id": 1628,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1629,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1630,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1631,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1632,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 178,
        "name": "พัฒนาการ - พระโขนง(สุขุมวิท50)",
        "points": [
          {
            "point_id": 1635,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1636,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1637,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1638,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1639,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1640,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1641,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 329,
        "name": "ทางขึ้นจตุโชติ (A)",
        "points": [
          {
            "point_id": 1525,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 331,
        "name": "ทางลงจตุโชติ (B)",
        "points": [
          {
            "point_id": 133,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 461,
        "name": "ทางลงสุขาภิบาล 5 (B)",
        "points": [
          {
            "point_id": 141,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 462,
        "name": "ทางขึ้นสุขาภิบาล 5 (B)",
        "points": [
          {
            "point_id": 127,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 469,
        "name": "ทางลงพัฒนาการ (A)",
        "points": [
          {
            "point_id": 1633,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 473,
        "name": "ทางขึ้นพัฒนาการ (A)",
        "points": [
          {
            "point_id": 1634,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 474,
        "name": "ทางขึ้นพระราม 9-2 (B)",
        "points": [
          {
            "point_id": 173,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 492,
        "name": "ทางลงรามอินทรา (B)",
        "points": [
          {
            "point_id": 1521,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 501,
        "name": "จตุโชติ - สุขาภิบาล 5-1",
        "points": [
          {
            "point_id": 1523,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1524,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2863,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 4,
    "name": "7 ทางพิเศษศรีรัช - วงแหวนรอบนอก",
    "traffic_index": 0.38303571428571426,
    "chunks": [
      {
        "traffic_index": 0.6,
        "chunk_id": 7,
        "name": "ทางขึ้นฉิมพลี",
        "points": [
          {
            "point_id": 13,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 10,
        "name": "ทางขึ้นตลื่งชัน",
        "points": [
          {
            "point_id": 23,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 90,
        "name": "ทางขึ้นบางบำหรุ",
        "points": [
          {
            "point_id": 21,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 131,
        "name": "ฉิมพลี - ตลิ่งชัน",
        "points": [
          {
            "point_id": 14,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 15,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 16,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 17,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 18,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 19,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 24,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1239,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1240,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1241,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1242,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1243,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1244,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1245,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1246,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1247,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 133,
        "name": "ตลิ่งชัน - บางบำหรุ",
        "points": [
          {
            "point_id": 20,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 22,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 25,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 26,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 27,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 28,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1248,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1249,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1250,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1251,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1252,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1253,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1254,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1255,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 134,
        "name": "บางบำหรุ - บางกรวย",
        "points": [
          {
            "point_id": 29,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 30,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 31,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1256,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1257,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1258,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 135,
        "name": "ทางขึ้นบางกรวย (A)",
        "points": [
          {
            "point_id": 1259,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 136,
        "name": "บางกรวย - สะพานพระราม 7",
        "points": [
          {
            "point_id": 32,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 33,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1260,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1261,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1452,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1453,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1454,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1455,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1457,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 137,
        "name": "ทางลงบางกรวย (A)",
        "points": [
          {
            "point_id": 1451,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 138,
        "name": "ทางขึ้นสะพานพระราม 7 (A)",
        "points": [
          {
            "point_id": 1456,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 139,
        "name": "ทางลงสะพานพระราม 7 (A)",
        "points": [
          {
            "point_id": 1458,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 140,
        "name": "สะพานพระราม 7 - บางซื่อ",
        "points": [
          {
            "point_id": 1459,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1460,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1461,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1462,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1463,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1464,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1465,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1466,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1467,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1468,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1469,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1470,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 141,
        "name": "บางซื่อ - สะพานพระราม 7",
        "points": [
          {
            "point_id": 1471,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1472,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1473,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1474,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1475,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1476,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1477,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1478,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1480,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1481,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1482,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1484,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 142,
        "name": "ทางลงบางซ่อน",
        "points": [
          {
            "point_id": 1479,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 143,
        "name": "ทางลงสะพานพระราม 7 (B)",
        "points": [
          {
            "point_id": 1488,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 144,
        "name": "ทางขึ้นบางพลัด (B)",
        "points": [
          {
            "point_id": 1491,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 145,
        "name": "สะพานพระราม 7 - บางพลัด",
        "points": [
          {
            "point_id": 1485,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1486,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1487,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1489,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1490,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9199999999999999,
        "chunk_id": 149,
        "name": "บางพลัด - ถนนศิรินธร",
        "points": [
          {
            "point_id": 1492,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1493,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1494,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1496,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1497,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 150,
        "name": "ทางลงบรมราชชนนี (B)",
        "points": [
          {
            "point_id": 1505,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 151,
        "name": "ทางลงฉิมพลี (ถนนกาญจนาภิเษก) (B)",
        "points": [
          {
            "point_id": 1517,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 152,
        "name": "บรมราชชนนี - กาญจนาภิเษก",
        "points": [
          {
            "point_id": 1509,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1510,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1511,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1512,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1513,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1514,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1515,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1516,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1518,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 153,
        "name": "ถนนศิรินธร - บรมราชชนนี",
        "points": [
          {
            "point_id": 1499,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1500,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1501,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1502,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1503,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1504,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1506,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1507,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1508,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 431,
        "name": "ทางขึ้นสะพานพระราม 7 (B)",
        "points": [
          {
            "point_id": 1483,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 432,
        "name": "ทางลงบางพลัด(B)",
        "points": [
          {
            "point_id": 1495,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 433,
        "name": "ทางลงถนนศิรินธร (B)",
        "points": [
          {
            "point_id": 1498,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 5,
    "name": "ทางพิเศษศรีรัช",
    "traffic_index": 0.8572115384615382,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 20,
        "name": "ทางขึ้นบางซื่อ (A)",
        "points": [
          {
            "point_id": 1735,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 169,
        "name": "ทางขึ้นพระราม 9",
        "points": [
          {
            "point_id": 114,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 187,
        "name": "แจ้งวัฒนะ - งามวงศ์วาน",
        "points": [
          {
            "point_id": 61,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 64,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 65,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 66,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 67,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 70,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 71,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1726,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1727,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 198,
        "name": "ทางลงงามวงศ์วาน (B)",
        "points": [
          {
            "point_id": 1866,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 199,
        "name": "ทางขึ้นงามวงศ์วาน (A)",
        "points": [
          {
            "point_id": 1216,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 200,
        "name": "งามวงศ์วาน - ประชาชื่น",
        "points": [
          {
            "point_id": 1215,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1217,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 201,
        "name": "ประชาชื่น - รัชดาภิเษก",
        "points": [
          {
            "point_id": 73,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 74,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 75,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 76,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 78,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1730,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1731,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 202,
        "name": "ทางลงประชาชื่น (A)",
        "points": [
          {
            "point_id": 1729,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 203,
        "name": "ทางขึ้นประชาชื่น (A)",
        "points": [
          {
            "point_id": 1728,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 204,
        "name": "ทางขึ้นรัชดาภิเษก (A)",
        "points": [
          {
            "point_id": 77,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8666666666666667,
        "chunk_id": 205,
        "name": "รัชดาภิเษก - บางซื่อ",
        "points": [
          {
            "point_id": 1732,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1733,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1734,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.6666666666666666,
        "chunk_id": 206,
        "name": "บางซื่อ - ย่านพหลโยธิน",
        "points": [
          {
            "point_id": 1736,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1737,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 1738,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 207,
        "name": "ย่านพหลโยธิน - คลองประปา",
        "points": [
          {
            "point_id": 1740,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1741,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1742,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1745,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 208,
        "name": "ยมราช (อุรุพงษ์) - สะพานสว่าง (หัวลำโพง)",
        "points": [
          {
            "point_id": 95,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 96,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1750,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 209,
        "name": "สะพานสว่าง (หัวลำโพง) - สุรวงศ์ (สาทร - สีลม)",
        "points": [
          {
            "point_id": 98,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1752,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 210,
        "name": "จันทน์ - พระราม 3",
        "points": [
          {
            "point_id": 103,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 104,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 105,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 106,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1758,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1759,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 211,
        "name": "พหลโยธิน - อโศก 2",
        "points": [
          {
            "point_id": 109,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 110,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1762,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1763,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 212,
        "name": "ทางลงอโศก 2",
        "points": [
          {
            "point_id": 111,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 213,
        "name": "อโศก 3-4 - พระราม 9",
        "points": [
          {
            "point_id": 113,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1766,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1767,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 214,
        "name": "ทางลงอโศก 3-4",
        "points": [
          {
            "point_id": 112,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 215,
        "name": "ทางลงรามคำแหง",
        "points": [
          {
            "point_id": 1771,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 216,
        "name": "พระราม 9 - รามคำแหง",
        "points": [
          {
            "point_id": 115,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 116,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1768,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1769,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 217,
        "name": "ทางลงศรีนครินทร์",
        "points": [
          {
            "point_id": 1786,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9789473684210527,
        "chunk_id": 218,
        "name": "รามคำแหง - ศรีนครินทร์",
        "points": [
          {
            "point_id": 117,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 118,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 119,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 120,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 121,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1772,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1773,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1774,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1775,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1776,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1777,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1778,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1779,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1780,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1781,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1782,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1783,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1784,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1785,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 219,
        "name": "ทางขึ้นศรีนครินทร์",
        "points": [
          {
            "point_id": 1787,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.7777777777777778,
        "chunk_id": 220,
        "name": "ศรีนครินทร์ - พระราม 9",
        "points": [
          {
            "point_id": 1788,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1789,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1790,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1791,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1792,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1793,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1794,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 1795,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 1796,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 1797,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 1798,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1800,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1801,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1802,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1803,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1804,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1805,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1806,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 222,
        "name": "พระราม 9 - อโศก 1",
        "points": [
          {
            "point_id": 1808,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1809,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1810,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1811,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1812,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 223,
        "name": "ทางขึ้นอโศก 1 (B)",
        "points": [
          {
            "point_id": 1813,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 224,
        "name": "ทางขึ้นอโศก 2",
        "points": [
          {
            "point_id": 1818,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 225,
        "name": "อโศก 2 - พหลโยธิน",
        "points": [
          {
            "point_id": 1820,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1821,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1822,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1823,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1824,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1826,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 226,
        "name": "ทางลงย่านพหลโยธิน (B)",
        "points": [
          {
            "point_id": 1858,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 227,
        "name": "ทางขึ้นพหลโยธิน (B)",
        "points": [
          {
            "point_id": 1827,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 228,
        "name": "พระราม 3 - จันทน์",
        "points": [
          {
            "point_id": 1829,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1830,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1831,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1833,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 229,
        "name": "ทางลงจันทน์",
        "points": [
          {
            "point_id": 1832,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1834,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 230,
        "name": "สุรวงศ์ (สาทร-สีลม) - สะพานสว่าง (หัวลำโพง)",
        "points": [
          {
            "point_id": 1843,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 231,
        "name": "สะพานสว่าง (หัวลำโพง) - ยมราช (อุรุพงษ์)",
        "points": [
          {
            "point_id": 1844,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1846,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1847,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 232,
        "name": "ทางขึ้นสุรวงศ์ (สาทร-สีลม) (A)",
        "points": [
          {
            "point_id": 1753,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 233,
        "name": "ทางลงสุรวงศ์ (สาทร-สีลม) (A)",
        "points": [
          {
            "point_id": 1754,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 234,
        "name": "ทางขึ้นสะพานสว่าง(หัวลำโพง) (B)",
        "points": [
          {
            "point_id": 1837,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 235,
        "name": "ทางลงสะพานสว่าง(หัวลำโพง) (B)",
        "points": [
          {
            "point_id": 1845,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 236,
        "name": "ทางขึ้นยมราช (อุรุพงษ์) (A)",
        "points": [
          {
            "point_id": 1751,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9,
        "chunk_id": 237,
        "name": "คลองประปา - ย่านพหลโยธิน",
        "points": [
          {
            "point_id": 1852,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1853,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1856,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1857,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 238,
        "name": "ย่านพหลโยธิน - บางซื่อ",
        "points": [
          {
            "point_id": 1859,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1860,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1861,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 239,
        "name": "ทางลงคลองประปา (B)",
        "points": [
          {
            "point_id": 1854,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 240,
        "name": "ทางขึ้นคลองประปา (B)",
        "points": [
          {
            "point_id": 1855,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 241,
        "name": "ทางลงบางซื่อ (ฺB)",
        "points": [
          {
            "point_id": 1862,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 242,
        "name": "รัชดาภิเษก - ประชาชื่น",
        "points": [
          {
            "point_id": 1867,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1868,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1870,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1871,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1872,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1875,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1876,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 243,
        "name": "ทางลงรัชดาภิเษก (B)",
        "points": [
          {
            "point_id": 1869,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 244,
        "name": "งามวงศ์วาน - แจ้งวัฒนะ",
        "points": [
          {
            "point_id": 1879,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1880,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1882,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1883,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1884,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1885,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1886,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1887,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1888,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1890,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1892,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 320,
        "name": "ประชาชื่น - งามวงศ์วาน",
        "points": [
          {
            "point_id": 1877,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1878,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 413,
        "name": "บางซื่อ - รัชดาภิเษก",
        "points": [
          {
            "point_id": 1863,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1864,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1865,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 421,
        "name": "ทางลงแจ้งวัฒนะ (ฺB)",
        "points": [
          {
            "point_id": 1889,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 422,
        "name": "ทางขึ้นแจ้งวัฒนะ (A)",
        "points": [
          {
            "point_id": 63,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 423,
        "name": "ทางลงงามวงศ์วาน (A)",
        "points": [
          {
            "point_id": 72,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 424,
        "name": "ทางขึ้นงามวงศ์วาน (B)",
        "points": [
          {
            "point_id": 1881,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 425,
        "name": "ทางลงประชาชื่น (B)",
        "points": [
          {
            "point_id": 1874,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 426,
        "name": "ทางขึ้นประชาชื่น (B)",
        "points": [
          {
            "point_id": 1873,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 428,
        "name": "ทางขึ้นย่านพหลโยธิน (A)",
        "points": [
          {
            "point_id": 1739,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 429,
        "name": "ทางลงคลองประปา (A)",
        "points": [
          {
            "point_id": 1743,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 430,
        "name": "ทางขึ้นคลองประปา (A)",
        "points": [
          {
            "point_id": 1744,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 463,
        "name": "ทางลงพระราม 3 (A)",
        "points": [
          {
            "point_id": 1760,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 464,
        "name": "ทางลงจันทน์ (A)",
        "points": [
          {
            "point_id": 102,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 465,
        "name": "ทางขึ้นจันทน์ (B)",
        "points": [
          {
            "point_id": 1835,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 467,
        "name": "ทางลงสุรวงศ์ (สาทร-สีลม) (B)",
        "points": [
          {
            "point_id": 1842,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 468,
        "name": "ทางลงยมราช (อุรุพงษ์) (A)",
        "points": [
          {
            "point_id": 94,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 471,
        "name": "ทางลงสะพานสว่าง(หัวลำโพง) (A)",
        "points": [
          {
            "point_id": 97,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 472,
        "name": "ทางขึ้นยมราช (อุรุพงษ์) (B)",
        "points": [
          {
            "point_id": 1848,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 475,
        "name": "ทางลงพระราม 9",
        "points": [
          {
            "point_id": 1807,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 477,
        "name": "ทางลงพหลโยธิน (B)",
        "points": [
          {
            "point_id": 1825,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 478,
        "name": "ทางขึ้นพหลโยธิน (A)",
        "points": [
          {
            "point_id": 107,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 479,
        "name": "ทางลงพหลโยธิน (A)",
        "points": [
          {
            "point_id": 1761,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9199999999999999,
        "chunk_id": 480,
        "name": "อโศก 1 - อโศก 2",
        "points": [
          {
            "point_id": 1814,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1815,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1816,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1817,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1819,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 481,
        "name": "จันทน์ - สุรวงศ์(สาทร-สีีลม)",
        "points": [
          {
            "point_id": 1836,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1838,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1839,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1840,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1841,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 482,
        "name": "สุรวงศ์ (สาทร-สีลม) - จันทน์",
        "points": [
          {
            "point_id": 1755,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1756,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1757,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 483,
        "name": "อโศก 2 -  อโศก 3-4",
        "points": [
          {
            "point_id": 1764,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1765,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 494,
        "name": "ยมราช (อุรุพงษ์) - พหลโยธิน",
        "points": [
          {
            "point_id": 108,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1849,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1850,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1851,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 495,
        "name": "พหลโยธิน - ยมราช (อุรุพงษ์)",
        "points": [
          {
            "point_id": 1746,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1747,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1748,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1749,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1828,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 502,
        "name": "ศรีนครินทร์ - พระราม 9-edit1",
        "points": [
          {
            "point_id": 1799,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 6,
    "name": "ทางพิเศษบูรพาวิถี",
    "traffic_index": 0.9301038062283732,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 63,
        "name": "ด่านเก็บเงินบางพลีน้อย",
        "points": [
          {
            "point_id": 304,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 72,
        "name": "บางพลีน้อย - บางสมัคร",
        "points": [
          {
            "point_id": 292,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 293,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 294,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 295,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 296,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 297,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 298,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 299,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 300,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 301,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2129,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2130,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 73,
        "name": "บางประกง 2 - ชลบุรี",
        "points": [
          {
            "point_id": 319,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 320,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 321,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 322,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 323,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 324,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 325,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 327,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 328,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 329,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 330,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2190,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2191,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2192,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2193,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2194,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2195,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2196,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 260,
        "name": "บางนา - บางนา กม.6",
        "points": [
          {
            "point_id": 227,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 229,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 230,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 231,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 232,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 233,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.7666666666666666,
        "chunk_id": 262,
        "name": "ทางลงบางแก้ว (A)",
        "points": [
          {
            "point_id": 249,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 647,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 2012,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 263,
        "name": "ทางขึ้นบางแก้ว (B)",
        "points": [
          {
            "point_id": 648,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1990,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2017,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2018,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 264,
        "name": "ทางขึ้นบางนา กม.6",
        "points": [
          {
            "point_id": 235,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9461538461538462,
        "chunk_id": 265,
        "name": "บางนา กม.6 - บางแก้ว",
        "points": [
          {
            "point_id": 236,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 237,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 238,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 239,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 240,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 241,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 242,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 243,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 244,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 245,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 246,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 247,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 248,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 266,
        "name": "บางแก้ว - บางพลี1",
        "points": [
          {
            "point_id": 250,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 252,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 253,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 268,
        "name": "บางพลี1 - บางพลี2",
        "points": [
          {
            "point_id": 228,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 255,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 256,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 257,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 258,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 259,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 260,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1935,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 270,
        "name": "บางพลี 2 - สุวรรณภูมิ",
        "points": [
          {
            "point_id": 1937,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1938,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 271,
        "name": "ทางลงสุวรรณภูมิ (A)",
        "points": [
          {
            "point_id": 1939,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 272,
        "name": "ทางขึ้นสุวรรณภูมิ (A)",
        "points": [
          {
            "point_id": 1940,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 273,
        "name": "สุวรรณภูมิ - เมืองใหม่บางพลี",
        "points": [
          {
            "point_id": 261,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 263,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 264,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 265,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 266,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 267,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 268,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1941,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1942,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1943,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1944,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1945,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1946,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1947,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 274,
        "name": "เมืองใหม่บางพลี - สุวรรณภูมิ",
        "points": [
          {
            "point_id": 1965,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1966,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1967,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1968,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1969,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1970,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1971,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2166,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2167,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2168,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2169,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2170,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2171,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2172,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 281,
        "name": "ทางลงบางนา กม.6",
        "points": [
          {
            "point_id": 2004,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8333333333333334,
        "chunk_id": 282,
        "name": "บางนา กม.6 - บางนา",
        "points": [
          {
            "point_id": 2006,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 2007,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2008,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2009,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2010,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2011,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9384615384615385,
        "chunk_id": 283,
        "name": "บางแก้ว - บางนา กม.6",
        "points": [
          {
            "point_id": 1991,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1992,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1993,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1994,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1995,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1996,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1997,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1998,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1999,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2000,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2001,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2002,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2003,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 284,
        "name": "บางพลี1 - บางแก้ว",
        "points": [
          {
            "point_id": 1986,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1987,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1989,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 286,
        "name": "บางพลี2 - บางพลี1",
        "points": [
          {
            "point_id": 1977,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1978,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1979,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1980,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1981,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1982,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1983,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1984,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 288,
        "name": "สุวรรณภูมิ - บางพลี2",
        "points": [
          {
            "point_id": 1974,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1975,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 291,
        "name": "ทางลงบางเสาธง",
        "points": [
          {
            "point_id": 280,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 292,
        "name": "ทางขึ้นบางเสาธง",
        "points": [
          {
            "point_id": 2143,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 293,
        "name": "เมืองใหม่บางพลี - บางเสาธง",
        "points": [
          {
            "point_id": 270,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 271,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 272,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 273,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 274,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 275,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 276,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 277,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 278,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 279,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 294,
        "name": "ทางขึ้นบางบ่อ (A)",
        "points": [
          {
            "point_id": 2121,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 295,
        "name": "ทางลงบางบ่อ (B)",
        "points": [
          {
            "point_id": 2140,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 296,
        "name": "บางเสาธง - บางบ่อ",
        "points": [
          {
            "point_id": 262,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 281,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 282,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 283,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 284,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 285,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 286,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 287,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 288,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 289,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 290,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 291,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2120,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 297,
        "name": "ทางลงบางพลีน้อย",
        "points": [
          {
            "point_id": 2128,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 298,
        "name": "ทางขึ้นบางพลีน้อย",
        "points": [
          {
            "point_id": 2131,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 299,
        "name": "บางบ่อ - บางพลีน้อย",
        "points": [
          {
            "point_id": 2122,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2123,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2124,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2125,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2126,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2127,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 300,
        "name": "บางพลีน้อย - บางบ่อ",
        "points": [
          {
            "point_id": 2132,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2133,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2134,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2135,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2136,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2137,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2138,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2139,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 301,
        "name": "บางบ่อ - บางเสาธง",
        "points": [
          {
            "point_id": 2141,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2144,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2145,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2146,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2147,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2148,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2149,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2150,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2151,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2152,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2153,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2154,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2155,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 302,
        "name": "บางเสาธง - เมืองใหม่บางพลี",
        "points": [
          {
            "point_id": 2156,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2157,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2158,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2159,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2160,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2161,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2162,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2163,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2164,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2165,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 303,
        "name": "ทางลงบางสมัคร",
        "points": [
          {
            "point_id": 302,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 307,
        "name": "ทางลงบางประกง 1",
        "points": [
          {
            "point_id": 2176,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 308,
        "name": "ทางขึ้นบางประกง1",
        "points": [
          {
            "point_id": 2184,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 309,
        "name": "ทางขึ้นบางประกง2",
        "points": [
          {
            "point_id": 326,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 310,
        "name": "ทางลงบางประกง2",
        "points": [
          {
            "point_id": 2186,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 311,
        "name": "บางประกง2 - ชลบุรี",
        "points": [
          {
            "point_id": 318,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 312,
        "name": "ทางลงชลบุรี",
        "points": [
          {
            "point_id": 2197,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 313,
        "name": "ทางขึ้นชลบุรี",
        "points": [
          {
            "point_id": 2198,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2201,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9789473684210527,
        "chunk_id": 314,
        "name": "ชลบุรี - บางประกง 2",
        "points": [
          {
            "point_id": 2199,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2200,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 2202,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2203,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2204,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2205,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2206,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2207,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2208,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2209,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2210,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2211,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2212,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2213,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2214,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2215,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2216,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2217,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2218,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 315,
        "name": "บางประกง2 - บางประกง1",
        "points": [
          {
            "point_id": 2219,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2220,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2221,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2222,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2223,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 316,
        "name": "บางประกง1 - บางวัว",
        "points": [
          {
            "point_id": 2224,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2225,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2226,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2227,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2228,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2229,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 317,
        "name": "บางวัว - บางสมัคร",
        "points": [
          {
            "point_id": 2230,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2231,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2232,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2233,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2234,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2235,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2236,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2237,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2238,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2239,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 318,
        "name": "บางสมัคร - บางพลีน้อย",
        "points": [
          {
            "point_id": 2182,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2241,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2242,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2243,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2244,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2245,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2246,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2247,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2248,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2249,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2250,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 434,
        "name": "ทางลงบางแก้ว (B)",
        "points": [
          {
            "point_id": 1988,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 435,
        "name": "ทางขึ้นบางแก้ว (A)",
        "points": [
          {
            "point_id": 251,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 436,
        "name": "ทางขึ้นบางนา (A)",
        "points": [
          {
            "point_id": 234,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 437,
        "name": "ทางลงบางนา (B)",
        "points": [
          {
            "point_id": 2005,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 438,
        "name": "ทางขึ้นสุวรรณภูมิ (B)",
        "points": [
          {
            "point_id": 1973,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 439,
        "name": "ทางลงสุวรรณภูมิ (B)",
        "points": [
          {
            "point_id": 1972,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9,
        "chunk_id": 496,
        "name": "บางสมัคร - บางวัว",
        "points": [
          {
            "point_id": 303,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 305,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 306,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 307,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 312,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 313,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 314,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 315,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 316,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 317,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 497,
        "name": "บางวัว - บางประกง 1",
        "points": [
          {
            "point_id": 309,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 310,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 311,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2173,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2174,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2175,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 498,
        "name": "บางประกง 1 - บางประกง 2",
        "points": [
          {
            "point_id": 2177,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2178,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2179,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2180,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2181,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2185,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 499,
        "name": "ทางขึ้นบางสมัคร",
        "points": [
          {
            "point_id": 2240,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 7,
    "name": "ทางพิเศษอุดรรัถยา",
    "traffic_index": 0.3342281879194632,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 76,
        "name": "บางปะอิน - เชียงราก",
        "points": [
          {
            "point_id": 332,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 333,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 334,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 335,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 336,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 337,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 338,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 339,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 340,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 341,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 342,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 343,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 344,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 345,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 346,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 347,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1588,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1589,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1590,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1591,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1592,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1593,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 78,
        "name": "เชียงราก - บางพูน",
        "points": [
          {
            "point_id": 376,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 377,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 379,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 380,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 381,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 382,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 383,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 384,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 385,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 386,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 387,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1594,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1595,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1596,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1597,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1598,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1599,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1600,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1602,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 79,
        "name": "บางพูน - ศรีสมาน",
        "points": [
          {
            "point_id": 1609,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1610,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1612,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1613,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1614,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1615,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1616,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1617,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1618,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1619,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1620,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1621,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1622,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1623,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1625,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1626,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 80,
        "name": "ศรีสมาน - เมืองทองธานี",
        "points": [
          {
            "point_id": 471,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1646,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1648,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1649,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1650,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1651,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.55,
        "chunk_id": 161,
        "name": "ทางขึ้นบางปะอิน (A)",
        "points": [
          {
            "point_id": 331,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1587,
            "traffic_index": 0.1,
            "status": "dark_red"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 179,
        "name": "ทางขึ้นบางพูน (B)",
        "points": [
          {
            "point_id": 1681,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 182,
        "name": "ทางขึ้นศรีสมาน (B)",
        "points": [
          {
            "point_id": 1664,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 183,
        "name": "ทางลงเมืองทองธานี (B)",
        "points": [
          {
            "point_id": 1656,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 184,
        "name": "ทางขึ้นเมืองทองธานี (B)",
        "points": [
          {
            "point_id": 1653,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 185,
        "name": "ทางลงแจ้งวัฒนะ (A)",
        "points": [
          {
            "point_id": 474,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 186,
        "name": "เมืองทองธานี - แจ้งวัฒนะ ",
        "points": [
          {
            "point_id": 473,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 188,
        "name": "ทางขึ้นแจ้งวัฒนะ (ฺB)",
        "points": [
          {
            "point_id": 62,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1891,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 189,
        "name": "แจ้งวัฒนะ - เมืองทองธานี",
        "points": [
          {
            "point_id": 1654,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1655,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 190,
        "name": "เมืองทองธานี - ศรีสมาน",
        "points": [
          {
            "point_id": 1657,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1658,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1659,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1660,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1661,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1662,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 191,
        "name": "ทางลงศรีสมาน (B)",
        "points": [
          {
            "point_id": 1663,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 192,
        "name": "ศรีสมาน - บางพูน",
        "points": [
          {
            "point_id": 1665,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1666,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1667,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1668,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1669,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1670,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1671,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1672,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1673,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1674,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1675,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1676,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1677,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1679,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1680,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 193,
        "name": "ทางลงบางพูน (B)",
        "points": [
          {
            "point_id": 1678,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 194,
        "name": "บางพูน - เชียงราก",
        "points": [
          {
            "point_id": 1682,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1683,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1684,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1685,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1686,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1687,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1688,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1689,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1690,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1691,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1692,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1693,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1694,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1695,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1697,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1698,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1699,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1700,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1701,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 195,
        "name": "ทางลงเชียงราก (B)",
        "points": [
          {
            "point_id": 1696,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9391304347826087,
        "chunk_id": 196,
        "name": "เชียงราก - บางปะอิน",
        "points": [
          {
            "point_id": 1702,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1703,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1704,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1705,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1706,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1707,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1708,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1709,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1710,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1711,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1712,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1713,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1714,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1715,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1716,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1717,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1718,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1719,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1720,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1721,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1722,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1723,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1724,
            "traffic_index": 0,
            "status": "unknown"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 197,
        "name": "ทางลงบางปะอิน (B)",
        "points": [
          {
            "point_id": 1725,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 414,
        "name": "ทางขึ้นเชียงราก (A)",
        "points": [
          {
            "point_id": 378,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 415,
        "name": "ทางลงบางพูน (A)",
        "points": [
          {
            "point_id": 1601,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 416,
        "name": "ทางขึ้นบางพูน (A)",
        "points": [
          {
            "point_id": 1611,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 417,
        "name": "ทางลงศรีสมาน (A)",
        "points": [
          {
            "point_id": 1624,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 418,
        "name": "ทางขึ้นศรีสมาน (A)",
        "points": [
          {
            "point_id": 1647,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 419,
        "name": "ทางลงเมืองทองธานี (A)",
        "points": [
          {
            "point_id": 1652,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 420,
        "name": "ทางขึ้นเมืองทองธานี (A)",
        "points": [
          {
            "point_id": 472,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 8,
    "name": "ทางพิเศษสายS1",
    "traffic_index": 0.9166666666666666,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 84,
        "name": "สุขุมวิท 62 - บางนา",
        "points": [
          {
            "point_id": 664,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 665,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 666,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 667,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1948,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1949,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1950,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1951,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1952,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1953,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1954,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1955,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8833333333333334,
        "chunk_id": 85,
        "name": "บางนา - สุขุมวิท 62",
        "points": [
          {
            "point_id": 668,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 669,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 670,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 671,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1956,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1957,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1958,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1959,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 1960,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1962,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 1963,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1964,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 9,
    "name": "ถนนวงแหวนรอบนอกด้านตะวันตก ทางหลวงพิเศษหมายเลข9 (ถนนกาญจนาภิเษก)",
    "traffic_index": 0.9741379310344831,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 324,
        "name": "ลำไทร - เชียงรากน้อย",
        "points": [
          {
            "point_id": 2361,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2362,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2363,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2364,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2365,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2366,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2367,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 325,
        "name": "เชียงรากน้อย - วงแหวนบางปะอิน",
        "points": [
          {
            "point_id": 2368,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2369,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2370,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2371,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2372,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2373,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2374,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2375,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2376,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2377,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2378,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2379,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2380,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2381,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2382,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2383,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2384,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2385,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2386,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2387,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2388,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 326,
        "name": "วงแหวนบางปะอิน - บางกระสั้น",
        "points": [
          {
            "point_id": 2389,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2390,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2391,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2392,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 327,
        "name": "บางกระสั้น - โพธิ์แตง",
        "points": [
          {
            "point_id": 2393,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2394,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2395,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2396,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 328,
        "name": "โพธิ์แตง - บางกระบือ",
        "points": [
          {
            "point_id": 2397,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2398,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2399,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2400,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2401,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2402,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2403,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2404,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2405,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2406,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2407,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2408,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2409,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2410,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 344,
        "name": "บางกระบือ - คลองควาย",
        "points": [
          {
            "point_id": 388,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2412,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2413,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2414,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2415,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2416,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2417,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 345,
        "name": "คลองควาย - บางเตย",
        "points": [
          {
            "point_id": 2418,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2419,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2420,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2421,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2422,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2423,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2424,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2425,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2426,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2427,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2428,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2429,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2430,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2431,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2432,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 347,
        "name": "บางเตย - คูบางหลวง",
        "points": [
          {
            "point_id": 2433,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2434,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2435,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2436,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2437,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2438,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 355,
        "name": "คูบางหลวง - คลองพระอุดม ",
        "points": [
          {
            "point_id": 2439,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2440,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2441,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2442,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2443,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2444,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2445,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2446,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2447,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2449,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2450,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2451,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2452,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2453,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2454,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2455,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2456,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2457,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2458,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2459,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2460,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2461,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 356,
        "name": "คลองพระอุดม - คลองข่อย",
        "points": [
          {
            "point_id": 2463,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2464,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2465,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2466,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2467,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2468,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2469,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2470,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2471,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2472,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2473,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2474,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2475,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2476,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 361,
        "name": "คลองข่อย - ลำโพ",
        "points": [
          {
            "point_id": 2477,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2478,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2479,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2480,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2481,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 362,
        "name": "ลำโพ - ละหาร ",
        "points": [
          {
            "point_id": 2482,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2483,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2484,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2485,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2486,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 365,
        "name": "ละหาร - บางบัวทอง",
        "points": [
          {
            "point_id": 2487,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2490,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2491,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2492,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2493,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2494,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 366,
        "name": "บางบัวทอง - พิมลราช",
        "points": [
          {
            "point_id": 2495,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2497,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2498,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2499,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2500,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2501,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2502,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 367,
        "name": "พิมลราช - บางรักพัฒนา",
        "points": [
          {
            "point_id": 2503,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2504,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2505,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2506,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 368,
        "name": "บางรักพัฒนา - เสาธงหิน",
        "points": [
          {
            "point_id": 2507,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2508,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2509,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2510,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2511,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2512,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2513,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2514,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2515,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8333333333333334,
        "chunk_id": 369,
        "name": "เสาธงหิน - บางแม่นาง",
        "points": [
          {
            "point_id": 2516,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 2517,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2518,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2519,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2520,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2521,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 370,
        "name": "บางแม่นาง - บางม่วง",
        "points": [
          {
            "point_id": 2522,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2523,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2524,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 375,
        "name": "บางม่วง - บางคูเวียง",
        "points": [
          {
            "point_id": 2525,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2526,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2527,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2528,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2529,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2530,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 376,
        "name": "บางคูเวียง - ปลายทาง",
        "points": [
          {
            "point_id": 2531,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2532,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2533,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2534,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2535,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2536,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2537,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2538,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 377,
        "name": "ปลายทาง -  แขวง ศาลาธรรมสพน์",
        "points": [
          {
            "point_id": 2539,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2540,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2541,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 378,
        "name": "แขวง ศาลาธรรมสพน์ -  แขวง ทวีวัฒนา",
        "points": [
          {
            "point_id": 2542,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2543,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2544,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2545,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2546,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2547,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2548,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2549,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2550,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2551,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2552,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2553,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 379,
        "name": "แขวง ทวีวัฒนา - แขวง บางไผ่",
        "points": [
          {
            "point_id": 2554,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2555,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2556,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 380,
        "name": "แขวง บางไผ่ -  แขวง บางแคเหนือ",
        "points": [
          {
            "point_id": 2558,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2559,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2560,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2561,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2562,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2563,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2564,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2565,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 381,
        "name": "แขวง บางแคเหนือ - แขวง หลักสอง",
        "points": [
          {
            "point_id": 2566,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2567,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2568,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2569,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2570,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 382,
        "name": "แขวง หลักสอง - แขวง บางบอน",
        "points": [
          {
            "point_id": 540,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2571,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2573,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2574,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2575,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2576,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2577,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2578,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2579,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2580,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2581,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2582,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2583,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9222222222222223,
        "chunk_id": 383,
        "name": " แขวง บางบอน - แขวง แสมดำ ",
        "points": [
          {
            "point_id": 2584,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2585,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2587,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 2588,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2589,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2590,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2591,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2592,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2593,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 384,
        "name": "แขวง แสมดำ - แขวง ท่าข้าม",
        "points": [
          {
            "point_id": 2594,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2595,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2596,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2597,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2598,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2599,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2600,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2601,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2602,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8111111111111111,
        "chunk_id": 385,
        "name": "แขวง ท่าข้าม - แขวง แสมดำ ",
        "points": [
          {
            "point_id": 2603,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2604,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2605,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2606,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2607,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2608,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 2609,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 2610,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2611,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 386,
        "name": "แขวง แสมดำ -  แขวง บางบอน ",
        "points": [
          {
            "point_id": 2612,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2613,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2614,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2615,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2616,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2617,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2618,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2619,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2620,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 387,
        "name": "แขวง บางบอน - แขวง หลักสอง",
        "points": [
          {
            "point_id": 2622,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2623,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2624,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2625,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2626,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2627,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2628,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2629,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2630,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2631,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2632,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 388,
        "name": "แขวง หลักสอง - แขวง บางแคเหนือ",
        "points": [
          {
            "point_id": 2633,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2634,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2635,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2636,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2637,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2638,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 389,
        "name": "แขวง บางแคเหนือ - แขแขวง บางไผ่ ",
        "points": [
          {
            "point_id": 2639,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2640,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2641,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2642,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2643,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2644,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2645,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2646,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 390,
        "name": "แขวง บางไผ่ - แขวง ทวีวัฒนา",
        "points": [
          {
            "point_id": 2647,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2656,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2657,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 391,
        "name": "แขวง ทวีวัฒนา - แขวง ศาลาธรรมสพน์ ",
        "points": [
          {
            "point_id": 2667,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2668,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2669,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2670,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2671,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2672,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2673,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2674,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2675,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2676,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2677,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2678,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 392,
        "name": "แขวง ศาลาธรรมสพน์ - ปลายทาง",
        "points": [
          {
            "point_id": 2679,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2693,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2694,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2695,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 393,
        "name": "ปลายทาง - บางคูเวียง ",
        "points": [
          {
            "point_id": 2696,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2697,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2698,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2699,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2700,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2701,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 394,
        "name": "บางคูเวียง - บางม่วง",
        "points": [
          {
            "point_id": 2702,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2703,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2704,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2705,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2706,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2707,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2708,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 395,
        "name": "บางม่วง - บางแม่นาง ",
        "points": [
          {
            "point_id": 2709,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2710,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 396,
        "name": "บางแม่นาง - เสาธงหิน ",
        "points": [
          {
            "point_id": 2711,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2712,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2713,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2714,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2715,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2716,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 397,
        "name": "เสาธงหิน - บางรักพัฒนา ",
        "points": [
          {
            "point_id": 2717,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2718,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2719,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2720,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2721,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2722,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2723,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2724,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 398,
        "name": "บางรักพัฒนา - พิมลราช ",
        "points": [
          {
            "point_id": 2725,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2726,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2727,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2728,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2729,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 399,
        "name": "พิมลราช - บางบัวทอง",
        "points": [
          {
            "point_id": 2730,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2731,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2732,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2733,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2734,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2735,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 400,
        "name": "บางบัวทอง - ละหาร ",
        "points": [
          {
            "point_id": 2736,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2737,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2738,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2739,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2740,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2741,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 401,
        "name": "ละหาร - ลำโพ",
        "points": [
          {
            "point_id": 2742,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2743,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2744,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2745,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2746,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2747,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 402,
        "name": "ลำโพ - คลองข่อย",
        "points": [
          {
            "point_id": 2748,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2749,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2750,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2751,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 403,
        "name": "คลองข่อย - คลองพระอุดม ",
        "points": [
          {
            "point_id": 2752,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2753,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2754,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2755,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2756,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2757,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2758,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2759,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2760,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2761,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2762,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2763,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2764,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2765,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 404,
        "name": "คลองพระอุดม - คูบางหลวง ",
        "points": [
          {
            "point_id": 2766,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2767,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2768,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2769,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2770,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2771,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2772,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2773,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2774,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2775,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2776,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2777,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2778,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2779,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2780,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2781,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2782,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2783,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2784,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2785,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2786,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2787,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2788,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2789,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 405,
        "name": "คูบางหลวง -  บางเตย",
        "points": [
          {
            "point_id": 2790,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2791,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2792,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2793,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2794,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 406,
        "name": "บางเตย - คลองควาย ",
        "points": [
          {
            "point_id": 2795,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2796,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2797,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2798,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2799,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2800,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2801,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2802,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2803,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2804,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2805,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2806,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2807,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2808,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 407,
        "name": "คลองควาย - บางกระบือ",
        "points": [
          {
            "point_id": 2809,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2810,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2811,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2812,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2813,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2814,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2815,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 408,
        "name": "บางกระบือ - โพธิ์แตง",
        "points": [
          {
            "point_id": 2816,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2817,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2818,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2819,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2820,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2821,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2822,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2823,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2824,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2825,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2826,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2827,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2828,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 409,
        "name": "โพธิ์แตง - บางกระสั้น ",
        "points": [
          {
            "point_id": 2829,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2830,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2831,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2832,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 410,
        "name": "บางกระสั้น - วงแหวนบางปะอิน",
        "points": [
          {
            "point_id": 2833,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2834,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2835,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2836,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 411,
        "name": "วงแหวนบางปะอิน - เชียงรากน้อย",
        "points": [
          {
            "point_id": 2837,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2838,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2839,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2840,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2841,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2842,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2843,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2844,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2845,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2846,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2847,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2848,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2849,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2850,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2851,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2852,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2853,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2854,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2855,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2856,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2857,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2859,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2860,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2861,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2862,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 412,
        "name": "เชียงรากน้อย - ลำไทร",
        "points": [
          {
            "point_id": 2858,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 10,
    "name": "ถนนวงแหวนรอบนอกด้านใต้ ทางหลวงพิเศษหมายเลข9 (ถนนกาญจนาภิเษก)",
    "traffic_index": 0.9467980295566499,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 245,
        "name": "บางขุนเทียน - บางครุ",
        "points": [
          {
            "point_id": 550,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 551,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 552,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 553,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 554,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 555,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 556,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 557,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 558,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 559,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 560,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 561,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 562,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 563,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 564,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 565,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 566,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 567,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 568,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 569,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 570,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 571,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 572,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 573,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1893,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1894,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1895,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1896,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1897,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1898,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1899,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1900,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1901,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1902,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1903,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1904,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1905,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1906,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 246,
        "name": "ทางลงบางครุ (B)",
        "points": [
          {
            "point_id": 2081,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 247,
        "name": "ทางขึ้นบางครุ (A)",
        "points": [
          {
            "point_id": 574,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 248,
        "name": "บางครุ - ปู่เจ้า",
        "points": [
          {
            "point_id": 575,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 576,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 577,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 578,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1907,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1908,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1909,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1910,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 249,
        "name": "ทางลงปู่เจ้า (B)",
        "points": [
          {
            "point_id": 2070,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 250,
        "name": "ทางขึ้นปู่เจ้า (B)",
        "points": [
          {
            "point_id": 2073,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 251,
        "name": "ปู่เจ้า - ปากน้ำ",
        "points": [
          {
            "point_id": 619,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 620,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 621,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 622,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 623,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1914,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1915,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1916,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1917,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1918,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1919,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 252,
        "name": "ทางลงปากน้ำ (B)",
        "points": [
          {
            "point_id": 2057,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 253,
        "name": "ทางขึ้นปากน้ำ (B)",
        "points": [
          {
            "point_id": 2060,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 254,
        "name": "ปากน้ำ - บางเมือง",
        "points": [
          {
            "point_id": 625,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 626,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 627,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 628,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 629,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 631,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1921,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1922,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1923,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 255,
        "name": "ทางลงบางเมือง (B)",
        "points": [
          {
            "point_id": 2044,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 256,
        "name": "ทางขึ้นบางเมือง (B)",
        "points": [
          {
            "point_id": 2050,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 257,
        "name": "บางเมือง - เทพารักษ์",
        "points": [
          {
            "point_id": 633,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 634,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 635,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 636,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 637,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 638,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 639,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 640,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1924,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1925,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1926,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1927,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 258,
        "name": "ทางลงเทพารักษ์ (B)",
        "points": [
          {
            "point_id": 2028,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 259,
        "name": "ทางขึ้นเทพารักษ์ (B)",
        "points": [
          {
            "point_id": 2030,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 261,
        "name": "เทพารักษ์ - บางแก้ว",
        "points": [
          {
            "point_id": 642,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 643,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 644,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 645,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 646,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1929,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1930,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1931,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1932,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1933,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1934,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 275,
        "name": "บางแก้ว - เทพารักษ์",
        "points": [
          {
            "point_id": 2013,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2014,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2015,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2016,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2019,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2020,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2021,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2022,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2023,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2024,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2025,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2026,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2027,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2029,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 276,
        "name": "เทพารักษ์ - บางเมือง",
        "points": [
          {
            "point_id": 2031,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2032,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2033,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2034,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2035,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2036,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2037,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2038,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2039,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2040,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2041,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2042,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2043,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2046,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 277,
        "name": "บางเมือง - ปากน้ำ",
        "points": [
          {
            "point_id": 2045,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2047,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2048,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2049,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2051,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2052,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2053,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2054,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2055,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2056,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2058,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2059,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 278,
        "name": "ปากน้ำ - ปู่เจ้า",
        "points": [
          {
            "point_id": 2061,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2062,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2063,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2064,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2065,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2066,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2067,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2068,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2069,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2071,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2072,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 279,
        "name": "ปู่เจ้า - บางครุ",
        "points": [
          {
            "point_id": 2074,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2075,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2076,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2077,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2078,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2079,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2080,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2082,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 280,
        "name": "บางครุ - บางขุนเทียน",
        "points": [
          {
            "point_id": 2083,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2084,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2085,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2086,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2087,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2088,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2089,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2090,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2091,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2092,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2093,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2094,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2095,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2096,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2097,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2098,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2099,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2100,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2101,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2102,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2103,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2104,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2105,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2106,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2107,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2108,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2109,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2110,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2111,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2112,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2113,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2114,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2115,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2116,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2117,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2118,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2119,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 484,
        "name": "ทางลงปู่เจ้า (A)",
        "points": [
          {
            "point_id": 579,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 485,
        "name": "ทางขึ้นปู่เจ้า (A)",
        "points": [
          {
            "point_id": 1911,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 486,
        "name": "ทางลงปากน้ำ (A)",
        "points": [
          {
            "point_id": 1920,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 487,
        "name": "ทางขึ้นปากน้ำ (A)",
        "points": [
          {
            "point_id": 624,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 488,
        "name": "ทางลงบางเมือง (A)",
        "points": [
          {
            "point_id": 630,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 489,
        "name": "ทางขึ้นบางเมือง (A)",
        "points": [
          {
            "point_id": 632,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 490,
        "name": "ทางขึ้นเทพารักษ์ (A)",
        "points": [
          {
            "point_id": 641,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 491,
        "name": "ทางลงเทพารักษ์ (A)",
        "points": [
          {
            "point_id": 1928,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 11,
    "name": "ถนนวงแหวนรอบนอกด้านตะวันออก ทางหลวงพิเศษหมายเลข9 (ถนนกาญจนาภิเษก)",
    "traffic_index": 0.957795698924731,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 332,
        "name": "บางพลี - ประเวศ",
        "points": [
          {
            "point_id": 2332,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2333,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2334,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2335,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 333,
        "name": "ประเวศ - บางพลี",
        "points": [
          {
            "point_id": 2666,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2680,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2681,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2682,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2683,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2684,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2685,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2686,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2687,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2688,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2689,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2690,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2691,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2692,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 334,
        "name": "ประเวศ - สะพานสูง",
        "points": [
          {
            "point_id": 2336,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2337,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2338,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2339,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2340,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2341,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2342,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2343,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2344,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2345,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2346,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2347,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2348,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2349,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2350,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2351,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2352,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2353,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2354,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2355,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2356,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2357,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2358,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2359,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2360,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 335,
        "name": "สะพานสูง - ประเวศ",
        "points": [
          {
            "point_id": 2648,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2649,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2650,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2651,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2652,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2653,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2654,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2655,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2658,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2659,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2660,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2661,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2662,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2663,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2664,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2665,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9708333333333333,
        "chunk_id": 336,
        "name": "สะพานสูง - คันนายาว",
        "points": [
          {
            "point_id": 764,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 765,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 766,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 767,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 768,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 769,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 770,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 771,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 772,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 773,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 774,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 775,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 776,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 777,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 778,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 779,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 780,
            "traffic_index": 0.3,
            "status": "red"
          },
          {
            "point_id": 781,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 782,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 783,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 784,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 785,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 786,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 787,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9857142857142858,
        "chunk_id": 337,
        "name": "คันนายาว - สะพานสูง",
        "points": [
          {
            "point_id": 736,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 737,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 738,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 739,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 740,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 741,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 742,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 743,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 744,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 745,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 746,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 747,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 748,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 749,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 750,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 751,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 752,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 753,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 754,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 755,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 756,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 757,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 758,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 759,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 760,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 761,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 762,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 763,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 338,
        "name": "คันนายาว - คลองสามวา",
        "points": [
          {
            "point_id": 816,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 817,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 818,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 819,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 820,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 821,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 822,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 823,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 824,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 825,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 826,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 827,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 828,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 829,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 830,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 831,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2411,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 339,
        "name": "คลองสามวา - บางเขน ",
        "points": [
          {
            "point_id": 832,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 833,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 834,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 835,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 340,
        "name": "คลองสามวา - คันนายาว",
        "points": [
          {
            "point_id": 798,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 799,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 800,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 801,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 802,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 803,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 804,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 805,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 806,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 807,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 808,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 809,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 810,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 811,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 812,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 813,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.75,
        "chunk_id": 341,
        "name": "บางเขน - คลองสามวา",
        "points": [
          {
            "point_id": 794,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 795,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 796,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 797,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 342,
        "name": "บางเขน - สายใหม",
        "points": [
          {
            "point_id": 836,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 837,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 838,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 839,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 343,
        "name": "สายใหม - บางเขน",
        "points": [
          {
            "point_id": 789,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 790,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 791,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 792,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 793,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 346,
        "name": "สายใหม - คลองสามวาจะวันตก(คลองสามวา)",
        "points": [
          {
            "point_id": 868,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 869,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 870,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 871,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 872,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 873,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 874,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 875,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 348,
        "name": "คลองสามวาจะวันตก(คลองสามวา) - สายใหม",
        "points": [
          {
            "point_id": 858,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 859,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 860,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 861,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 862,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 863,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 864,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 865,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 866,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 349,
        "name": "คลองสามวาจะวันตก(คลองสามวา) - ตำบล ลาดสวาย",
        "points": [
          {
            "point_id": 876,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 877,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 878,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 879,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 880,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 881,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 882,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 350,
        "name": "ตำบล ลาดสวาย - คลองสามวาจะวันตก(คลองสามวา)",
        "points": [
          {
            "point_id": 851,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 852,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 853,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 854,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 855,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 856,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 857,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 351,
        "name": "ตำบล ลาดสวาย - ตำบล บึงคำพร้อย",
        "points": [
          {
            "point_id": 883,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 884,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 885,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 886,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 887,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 352,
        "name": "ตำบล บึงคำพร้อย - ตำบล ลาดสวาย ",
        "points": [
          {
            "point_id": 847,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 848,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 849,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 850,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9578947368421055,
        "chunk_id": 353,
        "name": "ตำบล บึงคำพร้อย - รังสิต",
        "points": [
          {
            "point_id": 888,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 889,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 890,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 891,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 892,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 923,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 924,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 925,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 926,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 927,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 928,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 929,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 930,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 931,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 932,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 933,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 934,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2448,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 2462,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.9333333333333333,
        "chunk_id": 354,
        "name": "รังสิต - ตำบล บึงคำพร้อย",
        "points": [
          {
            "point_id": 840,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 841,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 842,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 843,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 844,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 845,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 846,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 908,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 909,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 910,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 911,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 912,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 913,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 914,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 915,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 916,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 917,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 918,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 919,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 920,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 921,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 357,
        "name": "ตำบล รังสิต - ตำบล บึงยีโถ",
        "points": [
          {
            "point_id": 935,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 936,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 937,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 358,
        "name": "ตำบล บึงยีโถ - ตำบล รังสิต",
        "points": [
          {
            "point_id": 906,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 907,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 359,
        "name": "ตำบล บึงยีโถ - ตำบล คลองสี่",
        "points": [
          {
            "point_id": 938,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 939,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 940,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 941,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 942,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 943,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.8888888888888888,
        "chunk_id": 360,
        "name": "ตำบล คลองสี่ - ตำบล บึงยีโถ",
        "points": [
          {
            "point_id": 897,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 898,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 899,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 900,
            "traffic_index": 0,
            "status": "unknown"
          },
          {
            "point_id": 901,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 902,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 903,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 904,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 905,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 363,
        "name": "ตำบล คลองสี่ - ตำบล คลองสาม",
        "points": [
          {
            "point_id": 970,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 971,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 972,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 973,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 974,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 975,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 976,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 977,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 978,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 979,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 980,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 981,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 982,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 983,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 984,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 985,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 986,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 987,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 988,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 989,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 990,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 991,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 992,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 993,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1024,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1025,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1026,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1027,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1028,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2488,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2489,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2496,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 364,
        "name": "ตำบล คลองสาม - ตำบล คลองสี่",
        "points": [
          {
            "point_id": 894,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 895,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 896,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 945,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 946,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 947,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 948,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 949,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 950,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 951,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 952,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 953,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 954,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 955,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 956,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 957,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 958,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 959,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 960,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 961,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 962,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 963,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 964,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 965,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 966,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 967,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 968,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1017,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1018,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1019,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1020,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1021,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1022,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 2572,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 371,
        "name": "ตำบล คลองสาม - ตำบล พยอม",
        "points": [
          {
            "point_id": 1029,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1030,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1031,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1032,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1033,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1034,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1035,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1036,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1037,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1038,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1039,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1040,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1041,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1042,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 372,
        "name": "ตำบล พยอม - ตำบล คลองสาม",
        "points": [
          {
            "point_id": 1005,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1006,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1007,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1008,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1009,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1010,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1011,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1012,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1013,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1014,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1015,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1016,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 373,
        "name": "ตำบล พยอม - ตำบล ลำไทร",
        "points": [
          {
            "point_id": 1043,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1044,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1045,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1046,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1047,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1048,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1049,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1050,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1051,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 374,
        "name": "ตำบล ลำไทร - ตำบล พยอม",
        "points": [
          {
            "point_id": 995,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 996,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 997,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 998,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 999,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1000,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1001,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1002,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1003,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1004,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 12,
    "name": "ทางหลวงพิเศษ กรุงเทพฯ-ชลบุรี",
    "traffic_index": 0.9648648648648649,
    "chunks": [
      {
        "traffic_index": 0.9885714285714287,
        "chunk_id": 83,
        "name": "กรุงเทพฯ - ชลบุรี",
        "points": [
          {
            "point_id": 586,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 587,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 588,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 589,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 590,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 591,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 592,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 593,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 594,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 595,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 596,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 597,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 598,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 599,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 600,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 601,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 602,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 603,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 604,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 605,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 606,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 607,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 608,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 609,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 610,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 611,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 612,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 613,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 614,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 615,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 616,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 617,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 618,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1324,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1325,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 96,
        "name": "ชลบุรี - กรุงเทพฯ",
        "points": [
          {
            "point_id": 1272,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1279,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1280,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1281,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1282,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1283,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1284,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1285,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1286,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1287,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1288,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1289,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1290,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1291,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1292,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1293,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1294,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1295,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1296,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1297,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1298,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1299,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1300,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1301,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1302,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1303,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1304,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1305,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1306,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1307,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1308,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1309,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1310,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1311,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1312,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 100,
        "name": "ทางขึ้นชลบุรี - กรุงเทพฯ",
        "points": [
          {
            "point_id": 1326,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 101,
        "name": "ทางลงชลบุรี - กรุงเทพฯ",
        "points": [
          {
            "point_id": 1327,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 102,
        "name": "ทางขึ้นกรุงเทพฯ - ชลบุรี",
        "points": [
          {
            "point_id": 584,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 103,
        "name": "ทางลงกรุงเทพฯ - ชลบุรี",
        "points": [
          {
            "point_id": 585,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 13,
    "name": "ทางยกระดับดอนเมืองโทล์เวย์",
    "traffic_index": 0.8907142857142857,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 2,
        "name": "ทางขึ้นดินแดง (B)",
        "points": [
          {
            "point_id": 1078,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 86,
        "name": "ดอนเมืองโทล์เวย์ (B)",
        "points": [
          {
            "point_id": 1077,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1080,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1081,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1082,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1083,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1084,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1085,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1086,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1087,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1088,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1089,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1090,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1091,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1092,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1093,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1094,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1095,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1096,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1097,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1098,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1099,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1100,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1130,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1131,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1132,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1133,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1134,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1135,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1136,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1137,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1138,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1139,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1140,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1141,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1142,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1143,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1144,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1145,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1146,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1147,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1148,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1149,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1150,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1151,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1152,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1153,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1154,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1155,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1178,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1179,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1180,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1181,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1182,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1183,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1184,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1185,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1186,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1187,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1188,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1189,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1190,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1191,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1192,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1193,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1194,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1195,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1196,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 104,
        "name": "ทางลงดินแดง (B)",
        "points": [
          {
            "point_id": 1079,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 452,
        "name": "ทางขึ้นดินแดง (A)",
        "points": [
          {
            "point_id": 1073,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 0.6,
        "chunk_id": 453,
        "name": "ทางลงดินแดง (A)",
        "points": [
          {
            "point_id": 1075,
            "traffic_index": 0.6,
            "status": "orange"
          }
        ]
      },
      {
        "traffic_index": 0.9942028985507245,
        "chunk_id": 493,
        "name": "ดอนเมืองโทล์เวย์ (A)",
        "points": [
          {
            "point_id": 1052,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1053,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1054,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1055,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1056,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1057,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1058,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1059,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1060,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1061,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1062,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1063,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1064,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1065,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1066,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1067,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1068,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1069,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1070,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1071,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1072,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1074,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1076,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1102,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1103,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1104,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1105,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1106,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1107,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1108,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1109,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1110,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1111,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1112,
            "traffic_index": 0.6,
            "status": "orange"
          },
          {
            "point_id": 1113,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1114,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1115,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1116,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1117,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1118,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1119,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1120,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1121,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1122,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1123,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1124,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1125,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1126,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1127,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1128,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1157,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1158,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1159,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1160,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1161,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1162,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1163,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1164,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1165,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1166,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1167,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1168,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1169,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1170,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1171,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1172,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1173,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1174,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1175,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
  {
    "id": 14,
    "name": "ถนนสายธนบุรี-ปากท่อ",
    "traffic_index": 0.972972972972973,
    "chunks": [
      {
        "traffic_index": 1,
        "chunk_id": 82,
        "name": "ธนบุรี - ปากท่อ",
        "points": [
          {
            "point_id": 1197,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1198,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1199,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1200,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1201,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1202,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1203,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1204,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1205,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1206,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1207,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1208,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1209,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1210,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1211,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1212,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1213,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 1214,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      },
      {
        "traffic_index": 1,
        "chunk_id": 89,
        "name": "ปากท่อ - ธนบุรี",
        "points": [
          {
            "point_id": 486,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 505,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 506,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 507,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 508,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 509,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 510,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 511,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 512,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 513,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 514,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 515,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 516,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 517,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 518,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 519,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 520,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 521,
            "traffic_index": 1,
            "status": "green"
          },
          {
            "point_id": 539,
            "traffic_index": 1,
            "status": "green"
          }
        ]
      }
    ],
  },
];
