export function getMapImageDataList() {
    mapImageDataList.forEach(road => {
        road.id = parseInt(road['@data-road-id']);
        road['img'].forEach(image => {
            image.id = parseInt(image['@data-id']);
            const srcPartList = image['@src'].split('/');
            if (srcPartList.length === 2) {
                image.color = srcPartList[0];
                const fileName = srcPartList[1];
                image.fileName = fileName;
                const lastDotPosition = fileName.lastIndexOf('.');
                const name = fileName.substring(0, lastDotPosition);
                const ext = fileName.substring(lastDotPosition + 1);
                //const fileNamePartList = fileName.split('.');
                image.srcGreen = 'green/' + ((fileName.includes('inout') || fileName.includes('line')) ? fileName : `${name}.${ext}`);
                image.srcOrange = 'orange/' + ((fileName.includes('inout') || fileName.includes('line')) ? fileName : `${name}o.${ext}`);
                image.srcRed = 'red/' + ((fileName.includes('inout') || fileName.includes('line')) ? fileName : `${name}r.${ext}`);
            } else {
                alert('ERROR: Invalid image src path name');
            }
        });
    });
    return mapImageDataList;
}

const mapImageDataList = [
    {
        "@data-road-id": "1",
        "img": [
            {
                "@data-id": "472",
                "@data-name": "ทางลงบางจาก",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางจาก",
                "@style": "top: 1219px; left: 794px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "110",
                "@data-name": "สุขสวัสดิ์ - สาธุประดิษฐ์",
                "@data-angle": "0",
                "@src": "green/111-1_CYXAroB.png",
                "@class": "chunk",
                "@title": "สุขสวัสดิ์ - สาธุประดิษฐ์",
                "@style": "top: 1363px; left: 167px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "597",
                "@data-name": "สาธุประดิษฐ์ - เลียบแม่น้ำ(พระราม3)",
                "@data-angle": "0",
                "@src": "green/029.png",
                "@class": "chunk",
                "@title": "สาธุประดิษฐ์ - เลียบแม่น้ำ(พระราม3)",
                "@style": "top: 1363px; left: 634px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "112",
                "@data-name": "เลียบแม่น้ำ(พระราม3) - ท่าเรือ",
                "@data-angle": "0",
                "@src": "green/030.png",
                "@class": "chunk",
                "@title": "เลียบแม่น้ำ(พระราม3) - ท่าเรือ",
                "@style": "top: 1363px; left: 710px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "113",
                "@data-name": "ท่าเรือ - อาจณรงค์",
                "@data-angle": "0",
                "@src": "green/031.png",
                "@class": "chunk",
                "@title": "ท่าเรือ - อาจณรงค์",
                "@style": "top: 1363px; left: 915px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "114",
                "@data-name": "อาจณรงค์ - สุขุมวิท 62",
                "@data-angle": "0",
                "@src": "green/112-1.png",
                "@class": "chunk",
                "@title": "อาจณรงค์ - สุขุมวิท 62",
                "@style": "top: 1363px; left: 1015px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "720",
                "@data-name": "ดินแดง - เพชรบุรี",
                "@data-angle": "0",
                "@src": "green/043.png",
                "@class": "chunk",
                "@title": "ดินแดง - เพชรบุรี",
                "@style": "top: 950px; left: 791px; transform: rotate(0deg); z-index: 10010;"
            },
            {
                "@data-id": "118",
                "@data-name": "เพชรบุรี - สุขุมวิท",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "เพชรบุรี - สุขุมวิท",
                "@style": "top: 1150px; left: 791px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "119",
                "@data-name": "ทางลงเพชรบุรี (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงเพชรบุรี (B)",
                "@style": "top: 1140px; left: 758px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "707",
                "@data-name": "สุขุมวิท - พระราม 4",
                "@data-angle": "0",
                "@src": "green/045_O4aLZcv.png",
                "@class": "chunk",
                "@title": "สุขุมวิท - พระราม 4",
                "@style": "top: 1197px; left: 791px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "475",
                "@data-name": "ทางขึ้นพระราม 3",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระราม 3",
                "@style": "top: 1417px; left: 429px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "706",
                "@data-name": "พระราม 4 - สุขุมวิท",
                "@data-angle": "0",
                "@src": "green/045_O4aLZcv.png",
                "@class": "chunk",
                "@title": "พระราม 4 - สุขุมวิท",
                "@style": "top: 1206px; left: 773px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "123",
                "@data-name": "สุขุมวิท - เพชรบุรี",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "สุขุมวิท - เพชรบุรี",
                "@style": "top: 1151px; left: 773px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "719",
                "@data-name": "เพชรบุรี - ดินแดง",
                "@data-angle": "0",
                "@src": "green/043.png",
                "@class": "chunk",
                "@title": "เพชรบุรี - ดินแดง",
                "@style": "top: 947px; left: 774px; transform: rotate(0deg); z-index: 10010;"
            },
            {
                "@data-id": "125",
                "@data-name": "สุขุมวิท 62 - อาจณรงค์",
                "@data-angle": "0",
                "@src": "green/112-2.png",
                "@class": "chunk",
                "@title": "สุขุมวิท 62 - อาจณรงค์",
                "@style": "top: 1380px; left: 1014px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "126",
                "@data-name": "อาจณรงค์ - ท่าเรือ",
                "@data-angle": "0",
                "@src": "green/031.png",
                "@class": "chunk",
                "@title": "อาจณรงค์ - ท่าเรือ",
                "@style": "top: 1380px; left: 914px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "127",
                "@data-name": "ท่าเรือ  - เลียบแม่น้ำ(พระราม3)",
                "@data-angle": "0",
                "@src": "green/030.png",
                "@class": "chunk",
                "@title": "ท่าเรือ  - เลียบแม่น้ำ(พระราม3)",
                "@style": "top: 1381px; left: 709px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "598",
                "@data-name": "เลียบแม่น้ำ(พระราม3) - สาธุประดิษฐ์",
                "@data-angle": "0",
                "@src": "green/029.png",
                "@class": "chunk",
                "@title": "เลียบแม่น้ำ(พระราม3) - สาธุประดิษฐ์",
                "@style": "top: 1380px; left: 634px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "129",
                "@data-name": "สาธุประดิษฐ์ - สุขสวัสดิ์",
                "@data-angle": "0",
                "@src": "green/111-2_nBLM3Ag.png",
                "@class": "chunk",
                "@title": "สาธุประดิษฐ์ - สุขสวัสดิ์",
                "@style": "top: 1380px; left: 179px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "655",
                "@data-name": "ทางลงโยธินพัฒนา",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงโยธินพัฒนา",
                "@style": "top: 669px; left: 1145px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "651",
                "@data-name": "ทางลงลาดพร้าว",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงลาดพร้าว",
                "@style": "top: 746px; left: 1180px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "647",
                "@data-name": "ทางขึ้นประชาอุทิศ",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นประชาอุทิศ",
                "@style": "top: 824px; left: 1180px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "654",
                "@data-name": "ทางขึ้นโยธินพัฒนา",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นโยธินพัฒนา",
                "@style": "top: 669px; left: 1180px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "653",
                "@data-name": "ทางขึ้นลาดพร้าว",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นลาดพร้าว",
                "@style": "top: 746px; left: 1145px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "646",
                "@data-name": "ทางลงประชาอุทิศ",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงประชาอุทิศ",
                "@style": "top: 824px; left: 1145px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "670",
                "@data-name": "ทางขึ้นพระโขนง(สุขุมวิท 50)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระโขนง(สุขุมวิท 50)",
                "@style": "top: 1218px; left: 1211px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "176",
                "@data-name": "สุขุมวิท62 - พระโขนง(สุขุมวิท 50)",
                "@data-angle": "0",
                "@src": "green/107-1.png",
                "@class": "chunk",
                "@title": "สุขุมวิท62 - พระโขนง(สุขุมวิท 50)",
                "@style": "top: 1223px; left: 1145px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "672",
                "@data-name": "ทางลงพระโขนง(สุขุมวิท50)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพระโขนง(สุขุมวิท50)",
                "@style": "top: 1219px; left: 1246px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "181",
                "@data-name": "พระโขนง(สุขุมวิท 50) - สุขุมวิท 62",
                "@data-angle": "0",
                "@src": "green/107-2.png",
                "@class": "chunk",
                "@title": "พระโขนง(สุขุมวิท 50) - สุขุมวิท 62",
                "@style": "top: 1222px; left: 1158px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "267",
                "@data-name": "ทางลงบางพลี1",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางพลี1",
                "@style": "top: 1479px; left: 1487px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "269",
                "@data-name": "ทางขึ้นบางพลี2",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพลี2",
                "@style": "top: 1479px; left: 1551px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "285",
                "@data-name": "ทางขึ้นบางพลี1",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพลี1",
                "@style": "top: 1514px; left: 1488px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "287",
                "@data-name": "ทางลงบางพลี2",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางพลี2",
                "@style": "top: 1514px; left: 1550px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "593",
                "@data-name": "ทางลงเมืองใหม่บางพลี",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงเมืองใหม่บางพลี",
                "@style": "top: 1503px; left: 1686px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "290",
                "@data-name": "ทางขึ้นเมืองใหม่บางพลี",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเมืองใหม่บางพลี",
                "@style": "top: 1520px; left: 1669px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "305",
                "@data-name": "ทางขึ้นบางวัว",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางวัว",
                "@style": "top: 1799px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "306",
                "@data-name": "ทางลงบางวัว",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางวัว",
                "@style": "top: 1799px; left: 1728px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "319",
                "@data-name": "ทางลงสุขุมวิท 62",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงสุขุมวิท 62",
                "@style": "top: 1432px; left: 1185px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "482",
                "@data-name": "ทางขึ้นสาธุประดิษฐ์ (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสาธุประดิษฐ์ (A)",
                "@style": "top: 1348px; left: 616px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "503",
                "@data-name": "ทางขึ้นเลียบแม่น้ำ (พระราม3) (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเลียบแม่น้ำ (พระราม3) (A)",
                "@style": "top: 1348px; left: 697px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "484",
                "@data-name": "ทางลงเลียบแม่น้ำ (พระราม3) (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงเลียบแม่น้ำ (พระราม3) (B)",
                "@style": "top: 1384px; left: 697px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "485",
                "@data-name": "ทางลงสาธุประดิษฐ์ (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงสาธุประดิษฐ์ (B)",
                "@style": "top: 1384px; left: 616px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "486",
                "@data-name": "ทางลงสาธุประดิษฐ์ (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงสาธุประดิษฐ์ (A)",
                "@style": "top: 1349px; left: 635px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "487",
                "@data-name": "ทางขึ้นสาธุประดิษฐ์ (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสาธุประดิษฐ์ (B)",
                "@style": "top: 1383px; left: 636px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "488",
                "@data-name": "ทางลงท่าเรือ (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงท่าเรือ (A)",
                "@style": "top: 1348px; left: 914px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "489",
                "@data-name": "ทางขึ้นท่าเรือ (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นท่าเรือ (B)",
                "@style": "top: 1384px; left: 914px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "504",
                "@data-name": "ทางขึ้นท่าเรือ (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นท่าเรือ (A)",
                "@style": "top: 1349px; left: 896px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "491",
                "@data-name": "ทางลงท่าเรือ (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงท่าเรือ (B)",
                "@style": "top: 1384px; left: 895px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "492",
                "@data-name": "ทางขึ้นอาจณรงค์ (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นอาจณรงค์ (B)",
                "@style": "top: 1383px; left: 1007px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "493",
                "@data-name": "ทางลงอาจณรงค์ (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงอาจณรงค์ (A)",
                "@style": "top: 1349px; left: 1006px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "496",
                "@data-name": "ทางขึ้นสุขุมวิท (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุขุมวิท (B)",
                "@style": "top: 1219px; left: 758px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "497",
                "@data-name": "ทางขึ้นพระรามที่ 4 (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระรามที่ 4 (B)",
                "@style": "top: 1307px; left: 759px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "498",
                "@data-name": "ทางลงพระรามที่ 4 (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพระรามที่ 4 (A)",
                "@style": "top: 1308px; left: 794px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "499",
                "@data-name": "ทางขึ้นพระรามที่ 4 (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระรามที่ 4 (A)",
                "@style": "top: 1289px; left: 793px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "500",
                "@data-name": "ทางลงพระรามที่ 4 (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพระรามที่ 4 (B)",
                "@style": "top: 1289px; left: 758px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "501",
                "@data-name": "ทางขึ้นเพชรบุรี (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเพชรบุรี (A)",
                "@style": "top: 1140px; left: 794px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "714",
                "@data-name": "ทางขึ้นสุขุมวิท 62",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุขุมวิท 62",
                "@style": "top: 1450px; left: 1167px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "4",
        "img": [
            {
                "@data-id": "432",
                "@data-name": "ทางขึ้นฉิมพลี",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นฉิมพลี",
                "@style": "top: 888px; left: 172px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "458",
                "@data-name": "ทางขึ้นตลื่งชัน",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นตลื่งชัน",
                "@style": "top: 887px; left: 209px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "434",
                "@data-name": "ทางขึ้นบางบำหรุ",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางบำหรุ",
                "@style": "top: 887px; left: 263px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "701",
                "@data-name": "ฉิมพลี - ตลิ่งชัน",
                "@data-angle": "0",
                "@src": "green/062.png",
                "@class": "chunk",
                "@title": "ฉิมพลี - ตลิ่งชัน",
                "@style": "top: 903px; left: 149px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "507",
                "@data-name": "ตลิ่งชัน - บางบำหรุ",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "ตลิ่งชัน - บางบำหรุ",
                "@style": "top: 903px; left: 221px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "509",
                "@data-name": "บางบำหรุ - บางกรวย",
                "@data-angle": "0",
                "@src": "green/014.png",
                "@class": "chunk",
                "@title": "บางบำหรุ - บางกรวย",
                "@style": "top: 903px; left: 272px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "135",
                "@data-name": "ทางขึ้นบางกรวย (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางกรวย (A)",
                "@style": "top: 888px; left: 300px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "136",
                "@data-name": "บางกรวย - สะพานพระราม 7",
                "@data-angle": "0",
                "@src": "green/104-1.png",
                "@class": "chunk",
                "@title": "บางกรวย - สะพานพระราม 7",
                "@style": "top: 874px; left: 315px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "461",
                "@data-name": "ทางลงบางกรวย (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางกรวย (A)",
                "@style": "top: 888px; left: 317px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "465",
                "@data-name": "ทางขึ้นสะพานพระราม 7 (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสะพานพระราม 7 (A)",
                "@style": "top: 876px; left: 345px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "463",
                "@data-name": "ทางลงสะพานพระราม 7 (A)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงสะพานพระราม 7 (A)",
                "@style": "top: 855px; left: 365px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "140",
                "@data-name": "สะพานพระราม 7 - บางซื่อ",
                "@data-angle": "0",
                "@src": "green/103-1_8kCx5D9.png",
                "@class": "chunk",
                "@title": "สะพานพระราม 7 - บางซื่อ",
                "@style": "top: 746px; left: 367px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "715",
                "@data-name": "บางซื่อ - สะพานพระราม 7",
                "@data-angle": "0",
                "@src": "green/103-2_6GERJeB.png",
                "@class": "chunk",
                "@title": "บางซื่อ - สะพานพระราม 7",
                "@style": "top: 790px; left: 378px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "467",
                "@data-name": "ทางลงสะพานพระราม 7 (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงสะพานพระราม 7 (B)",
                "@style": "top: 894px; left: 377px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "445",
                "@data-name": "ทางขึ้นบางพลัด (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพลัด (B)",
                "@style": "top: 923px; left: 317px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "145",
                "@data-name": "สะพานพระราม 7 - บางพลัด",
                "@data-angle": "0",
                "@src": "green/104-2.png",
                "@class": "chunk",
                "@title": "สะพานพระราม 7 - บางพลัด",
                "@style": "top: 886px; left: 315px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "149",
                "@data-name": "บางพลัด - ถนนศิรินธร",
                "@data-angle": "0",
                "@src": "green/014.png",
                "@class": "chunk",
                "@title": "บางพลัด - ถนนศิรินธร",
                "@style": "top: 920px; left: 272px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "150",
                "@data-name": "ทางลงบรมราชชนนี (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบรมราชชนนี (B)",
                "@style": "top: 923px; left: 208px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "470",
                "@data-name": "ทางลงฉิมพลี (ถนนกาญจนาภิเษก) (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงฉิมพลี (ถนนกาญจนาภิเษก) (B)",
                "@style": "top: 923px; left: 171px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "703",
                "@data-name": "บรมราชชนนี - กาญจนาภิเษก",
                "@data-angle": "0",
                "@src": "green/062.png",
                "@class": "chunk",
                "@title": "บรมราชชนนี - กาญจนาภิเษก",
                "@style": "top: 920px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "153",
                "@data-name": "ถนนศิรินธร - บรมราชชนนี",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "ถนนศิรินธร - บรมราชชนนี",
                "@style": "top: 920px; left: 221px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "462",
                "@data-name": "ทางขึ้นสะพานพระราม 7 (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสะพานพระราม 7 (B)",
                "@style": "top: 888px; left: 383px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "468",
                "@data-name": "ทางลงบางพลัด(B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางพลัด(B)",
                "@style": "top: 923px; left: 299px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "478",
                "@data-name": "ทางลงถนนศิรินธร (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงถนนศิรินธร (B)",
                "@style": "top: 923px; left: 263px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "3",
        "img": [
            {
                "@data-id": "620",
                "@data-name": "จตุโชติ - สุขาภิบาล 5",
                "@data-angle": "0",
                "@src": "green/022.png",
                "@class": "chunk",
                "@title": "จตุโชติ - สุขาภิบาล 5",
                "@style": "top: 444px; left: 1241px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "622",
                "@data-name": "สุขาภิบาล 5 - รามอินทรา",
                "@data-angle": "0",
                "@src": "green/105-2.png",
                "@class": "chunk",
                "@title": "สุขาภิบาล 5 - รามอินทรา",
                "@style": "top: 501px; left: 1176px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "658",
                "@data-name": "ทางขึ้นรามอินทรา (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นรามอินทรา (B)",
                "@style": "top: 600px; left: 1144px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "623",
                "@data-name": "รามอินทรา - โยธินพัฒนา",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "รามอินทรา - โยธินพัฒนา",
                "@style": "top: 598px; left: 1177px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "621",
                "@data-name": "สุขาภิบาล 5 - จตุโชติ",
                "@data-angle": "0",
                "@src": "green/018_0cOcOow.png",
                "@class": "chunk",
                "@title": "สุขาภิบาล 5 - จตุโชติ",
                "@style": "top: 401px; left: 1225px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "637",
                "@data-name": "รามอินทรา - สุขาภิบาล 5",
                "@data-angle": "0",
                "@src": "green/105-1.png",
                "@class": "chunk",
                "@title": "รามอินทรา - สุขาภิบาล 5",
                "@style": "top: 488px; left: 1159px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "636",
                "@data-name": "โยธินพัฒนา - รามอินทรา",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "โยธินพัฒนา - รามอินทรา",
                "@style": "top: 594px; left: 1160px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "660",
                "@data-name": "ทางลงสุขาภิบาล 5  (A)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงสุขาภิบาล 5  (A)",
                "@style": "top: 504px; left: 1239px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "662",
                "@data-name": "ทางขึ้นสุขาภิบาล 5 (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุขาภิบาล 5 (A)",
                "@style": "top: 499px; left: 1246px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "148",
                "@data-name": "ทางลงรามอินทรา (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงรามอินทรา (A)",
                "@style": "top: 601px; left: 1180px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "635",
                "@data-name": "ลาดพร้าว - โยธินพัฒนา",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "ลาดพร้าว - โยธินพัฒนา",
                "@style": "top: 673px; left: 1160px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "634",
                "@data-name": "ประชาอุทิศ - ลาดพร้าว",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "ประชาอุทิศ - ลาดพร้าว",
                "@style": "top: 752px; left: 1160px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "624",
                "@data-name": "โยธินพัฒนา - ลาดพร้าว",
                "@data-angle": "0",
                "@src": "green/021.png",
                "@class": "chunk",
                "@title": "โยธินพัฒนา - ลาดพร้าว",
                "@style": "top: 678px; left: 1177px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "675",
                "@data-name": "ลาดพร้าว - ประชาอุทิศ",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "ลาดพร้าว - ประชาอุทิศ",
                "@style": "top: 753px; left: 1177px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "633",
                "@data-name": "พระราม 9-2 - ประชาอุทิศ",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "พระราม 9-2 - ประชาอุทิศ",
                "@style": "top: 832px; left: 1160px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "628",
                "@data-name": "ประชาอุทิศ - พระราม 9-2",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "ประชาอุทิศ - พระราม 9-2",
                "@style": "top: 832px; left: 1177px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "638",
                "@data-name": "ทางลงพระราม 9-2 (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพระราม 9-2 (A)",
                "@style": "top: 901px; left: 1180px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "632",
                "@data-name": "พัฒนาการ - พระราม 9-2",
                "@data-angle": "0",
                "@src": "green/1.png",
                "@class": "chunk",
                "@title": "พัฒนาการ - พระราม 9-2",
                "@style": "top: 907px; left: 1160px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "643",
                "@data-name": "ทางขึ้นพัฒนาการ (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพัฒนาการ (B)",
                "@style": "top: 1155px; left: 1211px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "642",
                "@data-name": "ทางลงพัฒนาการ (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพัฒนาการ (B)",
                "@style": "top: 1137px; left: 1211px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "631",
                "@data-name": "พระโขนง(สุขุมวิท 50) - พัฒนาการ",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "พระโขนง(สุขุมวิท 50) - พัฒนาการ",
                "@style": "top: 1153px; left: 1226px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "629",
                "@data-name": "พระราม 9-2 - พัฒนาการ",
                "@data-angle": "0",
                "@src": "green/1.2_GW5gKpq.png",
                "@class": "chunk",
                "@title": "พระราม 9-2 - พัฒนาการ",
                "@style": "top: 907px; left: 1177px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "630",
                "@data-name": "พัฒนาการ - พระโขนง(สุขุมวิท50)",
                "@data-angle": "0",
                "@src": "green/019.png",
                "@class": "chunk",
                "@title": "พัฒนาการ - พระโขนง(สุขุมวิท50)",
                "@style": "top: 1154px; left: 1243px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "644",
                "@data-name": "ทางขึ้นจตุโชติ (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นจตุโชติ (A)",
                "@style": "top: 430px; left: 1315px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "664",
                "@data-name": "ทางลงจตุโชติ (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงจตุโชติ (B)",
                "@style": "top: 397px; left: 1296px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "661",
                "@data-name": "ทางลงสุขาภิบาล 5 (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงสุขาภิบาล 5 (B)",
                "@style": "top: 467px; left: 1227px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "663",
                "@data-name": "ทางขึ้นสุขาภิบาล 5 (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุขาภิบาล 5 (B)",
                "@style": "top: 487px; left: 1207px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "673",
                "@data-name": "ทางลงพัฒนาการ (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงพัฒนาการ (A)",
                "@style": "top: 1155px; left: 1245px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "641",
                "@data-name": "ทางขึ้นพัฒนาการ (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพัฒนาการ (A)",
                "@style": "top: 1137px; left: 1245px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "639",
                "@data-name": "ทางขึ้นพระราม 9-2 (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระราม 9-2 (B)",
                "@style": "top: 901px; left: 1144px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "657",
                "@data-name": "ทางลงรามอินทรา (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงรามอินทรา (B)",
                "@style": "top: 582px; left: 1145px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "722",
                "@data-name": "จตุโชติ - สุขาภิบาล 5-1",
                "@data-angle": "0",
                "@src": "green/022.png",
                "@class": "chunk",
                "@title": "จตุโชติ - สุขาภิบาล 5-1",
                "@style": "top: 411px; left: 1274px; transform: rotate(0deg); z-index: 10005;"
            }
        ]
    },
    {
        "@data-road-id": "5",
        "img": [
            {
                "@data-id": "20",
                "@data-name": "ทางขึ้นบางซื่อ (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางซื่อ (A)",
                "@style": "top: 884px; left: 599px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "169",
                "@data-name": "ทางขึ้นพระราม 9",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพระราม 9",
                "@style": "top: 1021px; left: 1045px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "187",
                "@data-name": "แจ้งวัฒนะ - งามวงศ์วาน",
                "@data-angle": "0",
                "@src": "green/101-2-udon.png",
                "@class": "chunk",
                "@title": "แจ้งวัฒนะ - งามวงศ์วาน",
                "@style": "top: 552px; left: 559px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "436",
                "@data-name": "ทางลงงามวงศ์วาน (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงงามวงศ์วาน (B)",
                "@style": "top: 614px; left: 565px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "447",
                "@data-name": "ทางขึ้นงามวงศ์วาน (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นงามวงศ์วาน (A)",
                "@style": "top: 613px; left: 599px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "200",
                "@data-name": "งามวงศ์วาน - ประชาชื่น",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "งามวงศ์วาน - ประชาชื่น",
                "@style": "top: 629px; left: 597px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "201",
                "@data-name": "ประชาชื่น - รัชดาภิเษก",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "ประชาชื่น - รัชดาภิเษก",
                "@style": "top: 679px; left: 597px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "202",
                "@data-name": "ทางลงประชาชื่น (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงประชาชื่น (A)",
                "@style": "top: 682px; left: 600px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "203",
                "@data-name": "ทางขึ้นประชาชื่น (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นประชาชื่น (A)",
                "@style": "top: 664px; left: 600px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "417",
                "@data-name": "ทางขึ้นรัชดาภิเษก (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นรัชดาภิเษก (A)",
                "@style": "top: 719px; left: 600px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "205",
                "@data-name": "รัชดาภิเษก - บางซื่อ",
                "@data-angle": "0",
                "@src": "green/009.png",
                "@class": "chunk",
                "@title": "รัชดาภิเษก - บางซื่อ",
                "@style": "top: 730px; left: 596px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "411",
                "@data-name": "บางซื่อ - ย่านพหลโยธิน",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางซื่อ - ย่านพหลโยธิน",
                "@style": "top: 894px; left: 596px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "690",
                "@data-name": "ย่านพหลโยธิน - คลองประปา",
                "@data-angle": "0",
                "@src": "green/049.png",
                "@class": "chunk",
                "@title": "ย่านพหลโยธิน - คลองประปา",
                "@style": "top: 945px; left: 596px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "208",
                "@data-name": "ยมราช (อุรุพงษ์) - สะพานสว่าง (หัวลำโพง)",
                "@data-angle": "0",
                "@src": "green/022.png",
                "@class": "chunk",
                "@title": "ยมราช (อุรุพงษ์) - สะพานสว่าง (หัวลำโพง)",
                "@style": "top: 1085px; left: 416px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "209",
                "@data-name": "สะพานสว่าง (หัวลำโพง) - สุรวงศ์ (สาทร - สีลม)",
                "@data-angle": "0",
                "@src": "green/109-1.png",
                "@class": "chunk",
                "@title": "สะพานสว่าง (หัวลำโพง) - สุรวงศ์ (สาทร - สีลม)",
                "@style": "top: 1143px; left: 388px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "210",
                "@data-name": "จันทน์ - พระราม 3",
                "@data-angle": "0",
                "@src": "green/108-2_iNzZUWc.png",
                "@class": "chunk",
                "@title": "จันทน์ - พระราม 3",
                "@style": "top: 1298px; left: 406px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "575",
                "@data-name": "พหลโยธิน - อโศก 2",
                "@data-angle": "0",
                "@src": "green/023.png",
                "@class": "chunk",
                "@title": "พหลโยธิน - อโศก 2",
                "@style": "top: 1036px; left: 683px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "446",
                "@data-name": "ทางลงอโศก 2",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงอโศก 2",
                "@style": "top: 1021px; left: 877px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "568",
                "@data-name": "อโศก 3-4 - พระราม 9",
                "@data-angle": "0",
                "@src": "green/025.png",
                "@class": "chunk",
                "@title": "อโศก 3-4 - พระราม 9",
                "@style": "top: 1036px; left: 958px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "214",
                "@data-name": "ทางลงอโศก 3-4",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงอโศก 3-4",
                "@style": "top: 1020px; left: 961px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "215",
                "@data-name": "ทางลงรามคำแหง",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงรามคำแหง",
                "@style": "top: 1021px; left: 1127px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "569",
                "@data-name": "พระราม 9 - รามคำแหง",
                "@data-angle": "0",
                "@src": "green/026.png",
                "@class": "chunk",
                "@title": "พระราม 9 - รามคำแหง",
                "@style": "top: 1036px; left: 1048px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "217",
                "@data-name": "ทางลงศรีนครินทร์",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงศรีนครินทร์",
                "@style": "top: 1021px; left: 1292px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "562",
                "@data-name": "รามคำแหง - ศรีนครินทร์",
                "@data-angle": "0",
                "@src": "green/028.png",
                "@class": "chunk",
                "@title": "รามคำแหง - ศรีนครินทร์",
                "@style": "top: 1036px; left: 1123px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "219",
                "@data-name": "ทางขึ้นศรีนครินทร์",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นศรีนครินทร์",
                "@style": "top: 1056px; left: 1292px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "220",
                "@data-name": "ศรีนครินทร์ - พระราม 9",
                "@data-angle": "0",
                "@src": "green/027.png",
                "@class": "chunk",
                "@title": "ศรีนครินทร์ - พระราม 9",
                "@style": "top: 1053px; left: 1039px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "222",
                "@data-name": "พระราม 9 - อโศก 1",
                "@data-angle": "0",
                "@src": "green/025.png",
                "@class": "chunk",
                "@title": "พระราม 9 - อโศก 1",
                "@style": "top: 1053px; left: 949px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "223",
                "@data-name": "ทางขึ้นอโศก 1 (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นอโศก 1 (B)",
                "@style": "top: 1056px; left: 961px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "224",
                "@data-name": "ทางขึ้นอโศก 2",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นอโศก 2",
                "@style": "top: 1056px; left: 878px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "225",
                "@data-name": "อโศก 2 - พหลโยธิน",
                "@data-angle": "0",
                "@src": "green/023.png",
                "@class": "chunk",
                "@title": "อโศก 2 - พหลโยธิน",
                "@style": "top: 1053px; left: 683px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "226",
                "@data-name": "ทางลงย่านพหลโยธิน (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงย่านพหลโยธิน (B)",
                "@style": "top: 937px; left: 564px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "227",
                "@data-name": "ทางขึ้นพหลโยธิน (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพหลโยธิน (B)",
                "@style": "top: 1057px; left: 686px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "228",
                "@data-name": "พระราม 3 - จันทน์",
                "@data-angle": "0",
                "@src": "green/108-1_dOESXV2.png",
                "@class": "chunk",
                "@title": "พระราม 3 - จันทน์",
                "@style": "top: 1298px; left: 389px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "229",
                "@data-name": "ทางลงจันทน์",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงจันทน์",
                "@style": "top: 1287px; left: 375px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "230",
                "@data-name": "สุรวงศ์ (สาทร-สีลม) - สะพานสว่าง (หัวลำโพง)",
                "@data-angle": "0",
                "@src": "green/109-2.png",
                "@class": "chunk",
                "@title": "สุรวงศ์ (สาทร-สีลม) - สะพานสว่าง (หัวลำโพง)",
                "@style": "top: 1153px; left: 406px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "231",
                "@data-name": "สะพานสว่าง (หัวลำโพง) - ยมราช (อุรุพงษ์)",
                "@data-angle": "0",
                "@src": "green/022.png",
                "@class": "chunk",
                "@title": "สะพานสว่าง (หัวลำโพง) - ยมราช (อุรุพงษ์)",
                "@style": "top: 1096px; left: 429px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "232",
                "@data-name": "ทางขึ้นสุรวงศ์ (สาทร-สีลม) (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุรวงศ์ (สาทร-สีลม) (A)",
                "@style": "top: 1218px; left: 409px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "233",
                "@data-name": "ทางลงสุรวงศ์ (สาทร-สีลม) (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงสุรวงศ์ (สาทร-สีลม) (A)",
                "@style": "top: 1236px; left: 409px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "234",
                "@data-name": "ทางขึ้นสะพานสว่าง(หัวลำโพง) (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสะพานสว่าง(หัวลำโพง) (B)",
                "@style": "top: 1140px; left: 396px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "235",
                "@data-name": "ทางลงสะพานสว่าง(หัวลำโพง) (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงสะพานสว่าง(หัวลำโพง) (B)",
                "@style": "top: 1119px; left: 415px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "236",
                "@data-name": "ทางขึ้นยมราช (อุรุพงษ์) (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นยมราช (อุรุพงษ์) (A)",
                "@style": "top: 1096px; left: 489px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "689",
                "@data-name": "คลองประปา - ย่านพหลโยธิน",
                "@data-angle": "0",
                "@src": "green/049.png",
                "@class": "chunk",
                "@title": "คลองประปา - ย่านพหลโยธิน",
                "@style": "top: 945px; left: 579px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "412",
                "@data-name": "ย่านพหลโยธิน - บางซื่อ",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "ย่าน���หลโยธิน - บางซื่อ",
                "@style": "top: 894px; left: 579px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "450",
                "@data-name": "ทางลงคลองประปา (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงคลองประปา (B)",
                "@style": "top: 984px; left: 565px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "460",
                "@data-name": "ทางขึ้นคลองประปา (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นคลองประปา (B)",
                "@style": "top: 1002px; left: 565px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "241",
                "@data-name": "ทางลงบางซื่อ (ฺB)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางซื่อ (ฺB)",
                "@style": "top: 884px; left: 564px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "410",
                "@data-name": "รัชดาภิเษก - ประชาชื่น",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "รัชดาภิเษก - ประชาชื่น",
                "@style": "top: 679px; left: 579px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "243",
                "@data-name": "ทางลงรัชดาภิเษก (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงรัชดาภิเษก (B)",
                "@style": "top: 720px; left: 566px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "244",
                "@data-name": "งามวงศ์วาน - แจ้งวัฒนะ",
                "@data-angle": "0",
                "@src": "green/101-1-udon.png",
                "@class": "chunk",
                "@title": "งามวงศ์วาน - แจ้งวัฒนะ",
                "@style": "top: 564px; left: 546px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "320",
                "@data-name": "ประชาชื่น - งามวงศ์วาน",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "ประชาชื่น - งามวงศ์วาน",
                "@style": "top: 629px; left: 579px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "415",
                "@data-name": "บางซื่อ - รัชดาภิเษก",
                "@data-angle": "0",
                "@src": "green/009.png",
                "@class": "chunk",
                "@title": "บางซื่อ - รัชดาภิเษก",
                "@style": "top: 730px; left: 579px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "433",
                "@data-name": "ทางลงแจ้งวัฒนะ (ฺB)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงแจ้งวัฒนะ (ฺB)",
                "@style": "top: 570px; left: 533px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "435",
                "@data-name": "ทางขึ้นแจ้งวัฒนะ (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นแจ้งวัฒนะ (A)",
                "@style": "top: 538px; left: 564px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "438",
                "@data-name": "ทางลงงามวงศ์วาน (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงงามวงศ์วาน (A)",
                "@style": "top: 631px; left: 600px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "440",
                "@data-name": "ทางขึ้นงามวงศ์วาน (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นงามวงศ์วาน (B)",
                "@style": "top: 632px; left: 566px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "441",
                "@data-name": "ทางลงประชาชื่น (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงประชาชื่น (B)",
                "@style": "top: 665px; left: 566px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "442",
                "@data-name": "ทางขึ้นประชาชื่น (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นประชาชื่น (B)",
                "@style": "top: 682px; left: 565px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "449",
                "@data-name": "ทางขึ้นย่านพหลโยธิน (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นย่านพหลโยธิน (A)",
                "@style": "top: 937px; left: 599px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "452",
                "@data-name": "ทางลงคลองประปา (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงคลองประปา (A)",
                "@style": "top: 1003px; left: 600px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "455",
                "@data-name": "ทางขึ้นคลองประปา (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นคลองประปา (A)",
                "@style": "top: 984px; left: 599px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "527",
                "@data-name": "ทางลงพระราม 3 (A)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงพระราม 3 (A)",
                "@style": "top: 1400px; left: 446px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "530",
                "@data-name": "ทางลงจันทน์ (A)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงจันทน์ (A)",
                "@style": "top: 1306px; left: 409px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "531",
                "@data-name": "ทางขึ้นจันทน์ (B)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นจันทน์ (B)",
                "@style": "top: 1305px; left: 374px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "537",
                "@data-name": "ทางลงสุรวงศ์ (สาทร-สีลม) (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงสุรวงศ์ (สาทร-สีลม) (B)",
                "@style": "top: 1217px; left: 374px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "541",
                "@data-name": "ทางลงยมราช (อุรุพงษ์) (A)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงยมราช (อุรุพงษ์) (A)",
                "@style": "top: 1101px; left: 483px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "573",
                "@data-name": "ทางลงสะพานสว่าง(หัวลำโพง) (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงสะพานสว่าง(หัวลำโพง) (A)",
                "@style": "top: 1159px; left: 424px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "547",
                "@data-name": "ทางขึ้นยมราช (อุรุพงษ์) (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นยมราช (อุรุพงษ์) (B)",
                "@style": "top: 1084px; left: 451px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "559",
                "@data-name": "ทางลงพระราม 9",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงพระราม 9",
                "@style": "top: 1056px; left: 1044px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "556",
                "@data-name": "ทางลงพหลโยธิน (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงพหลโยธิน (B)",
                "@style": "top: 1057px; left: 667px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "557",
                "@data-name": "ทางขึ้นพหลโยธิน (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นพหลโยธิน (A)",
                "@style": "top: 1021px; left: 668px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "558",
                "@data-name": "ทางลงพหลโยธิน (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงพหลโยธิน (A)",
                "@style": "top: 1021px; left: 686px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "600",
                "@data-name": "อโศก 1 - อโศก 2",
                "@data-angle": "0",
                "@src": "green/034.png",
                "@class": "chunk",
                "@title": "อโศก 1 - อโศก 2",
                "@style": "top: 1053px; left: 882px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "570",
                "@data-name": "จันทน์ - สุรวงศ์(สาทร-สีีลม)",
                "@data-angle": "0",
                "@src": "green/021.png",
                "@class": "chunk",
                "@title": "จันทน์ - สุรวงศ์(สาทร-สีีลม)",
                "@style": "top: 1230px; left: 389px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "571",
                "@data-name": "สุรวงศ์ (สาทร-สีลม) - จันทน์",
                "@data-angle": "0",
                "@src": "green/021.png",
                "@class": "chunk",
                "@title": "สุรวงศ์ (สาทร-สีลม) - จันทน์",
                "@style": "top: 1229px; left: 406px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "581",
                "@data-name": "อโศก 2 -  อโศก 3-4",
                "@data-angle": "0",
                "@src": "green/026.png",
                "@class": "chunk",
                "@title": "อโศก 2 -  อโศก 3-4",
                "@style": "top: 1036px; left: 882px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "669",
                "@data-name": "ยมราช (อุรุพงษ์) - พหลโยธิน",
                "@data-angle": "0",
                "@src": "green/110-1.png",
                "@class": "chunk",
                "@title": "ยมราช (อุรุพงษ์) - พหลโยธิน",
                "@style": "top: 1035px; left: 474px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "671",
                "@data-name": "พหลโยธิน - ยมราช (อุรุพงษ์)",
                "@data-angle": "0",
                "@src": "green/110-2.png",
                "@class": "chunk",
                "@title": "พหลโยธิน - ยมราช (อุรุพงษ์)",
                "@style": "top: 1052px; left: 486px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "724",
                "@data-name": "ศรีนครินทร์ - พระราม 9-edit1",
                "@data-angle": "0",
                "@src": "green/027g-edit.png",
                "@class": "chunk",
                "@title": "ศรีนครินทร์ - พระราม 9-edit1",
                "@style": "top: 1053px; left: 1277px; transform: rotate(0deg); z-index: 10005;"
            }
        ]
    },
    {
        "@data-road-id": "8",
        "img": [
            {
                "@data-id": "584",
                "@data-name": "สุขุมวิท 62 - บางนา",
                "@data-angle": "0",
                "@src": "green/113-1.png",
                "@class": "chunk",
                "@title": "สุขุมวิท 62 - บางนา",
                "@style": "top: 1438px; left: 1186px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "585",
                "@data-name": "บางนา - สุขุมวิท 62",
                "@data-angle": "0",
                "@src": "green/113-2.png",
                "@class": "chunk",
                "@title": "บางนา - สุขุมวิท 62",
                "@style": "top: 1449px; left: 1175px; transform: rotate(0deg); z-index: 10005;"
            }
        ]
    },
    {
        "@data-road-id": "12",
        "img": [
            {
                "@data-id": "716",
                "@data-name": "กรุงเทพฯ - ชลบุรี",
                "@data-angle": "0",
                "@src": "green/028.png",
                "@class": "chunk",
                "@title": "กรุงเทพฯ - ชลบุรี",
                "@style": "top: 1036px; left: 1286px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "723",
                "@data-name": "ชลบุรี - กรุงเทพฯ",
                "@data-angle": "0",
                "@src": "green/023g-edit_KVuwGli.png",
                "@class": "chunk",
                "@title": "ชลบุรี - กรุงเทพฯ",
                "@style": "top: 1053px; left: 1374px; transform: rotate(0deg); z-index: 10005;"
            }
        ]
    },
    {
        "@data-road-id": "13",
        "img": [
            {
                "@data-id": "86",
                "@data-name": "ดอนเมืองโทล์เวย์ (B)",
                "@data-angle": "0",
                "@src": "green/042.png",
                "@class": "chunk",
                "@title": "ดอนเมืองโทล์เวย์ (B)",
                "@style": "top: 364px; left: 774px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "104",
                "@data-name": "ทางลงดินแดง (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงดินแดง (B)",
                "@style": "top: 938px; left: 758px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "494",
                "@data-name": "ทางขึ้นดินแดง (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นดินแดง (A)",
                "@style": "top: 937px; left: 794px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "659",
                "@data-name": "ดอนเมืองโทล์เวย์ (A)",
                "@data-angle": "0",
                "@src": "green/042.png",
                "@class": "chunk",
                "@title": "ดอนเมืองโทล์เวย์ (A)",
                "@style": "top: 364px; left: 790px; transform: rotate(0deg); z-index: 10005;"
            }
        ]
    },
    {
        "@data-road-id": "14",
        "img": []
    },
    {
        "@data-road-id": "11",
        "img": [
            {
                "@data-id": "329",
                "@data-name": "บางพลี - ประเวศ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "บางพลี - ประเวศ",
                "@style": "top: 1447px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "330",
                "@data-name": "ประเวศ - บางพลี",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ประเวศ - บางพลี",
                "@style": "top: 1447px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "331",
                "@data-name": "ประเวศ - สะพานสูง",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ประเวศ - สะพานสูง",
                "@style": "top: 1363px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "332",
                "@data-name": "สะพานสูง - ประเวศ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "สะพานสูง - ประเวศ",
                "@style": "top: 1363px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "333",
                "@data-name": "สะพานสูง - คันนายาว",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "สะพานสูง - คันนายาว",
                "@style": "top: 1279px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "334",
                "@data-name": "คันนายาว - สะพานสูง",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คันนายาว - สะพานสูง",
                "@style": "top: 1279px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "335",
                "@data-name": "คันนายาว - คลองสามวา",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คันนายาว - คลองสามวา",
                "@style": "top: 1196px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "336",
                "@data-name": "คลองสามวา - บางเขน ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คลองสามวา - บางเขน ",
                "@style": "top: 1113px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "337",
                "@data-name": "คลองสามวา - คันนายาว",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คลองสามวา - คันนายาว",
                "@style": "top: 1196px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "338",
                "@data-name": "บางเขน - คลองสามวา",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "บางเขน - คลองสามวา",
                "@style": "top: 1113px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "339",
                "@data-name": "บางเขน - สายใหม",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "บางเขน - สายใหม",
                "@style": "top: 1030px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "340",
                "@data-name": "สายใหม - บางเขน",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "สายใหม - บางเขน",
                "@style": "top: 1030px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "343",
                "@data-name": "สายใหม - คลองสามวาจะวันตก(คลองสามวา)",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "สายใหม - คลองสามวาจะวันตก(คลองสามวา)",
                "@style": "top: 947px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "345",
                "@data-name": "คลองสามวาจะวันตก(คลองสามวา) - สายใหม",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คลองสามวาจะวันตก(คลองสามวา) - สายใหม",
                "@style": "top: 947px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "346",
                "@data-name": "คลองสามวาจะวันตก(คลองสามวา) - ตำบล ลาดสวาย",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "คลองสามวาจะวันตก(คลองสามวา) - ตำบล ลาดสวาย",
                "@style": "top: 864px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "347",
                "@data-name": "ตำบล ลาดสวาย - คลองสามวาจะวันตก(คลองสามวา)",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล ลาดสวาย - คลองสามวาจะวันตก(คลองสามวา)",
                "@style": "top: 864px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "348",
                "@data-name": "ตำบล ลาดสวาย - ตำบล บึงคำพร้อย",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล ลาดสวาย - ตำบล บึงคำพร้อย",
                "@style": "top: 781px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "349",
                "@data-name": "ตำบล บึงคำพร้อย - ตำบล ลาดสวาย ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล บึงคำพร้อย - ตำบล ลาดสวาย ",
                "@style": "top: 781px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "350",
                "@data-name": "ตำบล บึงคำพร้อย - รังสิต",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล บึงคำพร้อย - รังสิต",
                "@style": "top: 698px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "351",
                "@data-name": "รังสิต - ตำบล บึงคำพร้อย",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "รังสิต - ตำบล บึงคำพร้อย",
                "@style": "top: 698px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "354",
                "@data-name": "ตำบล รังสิต - ตำบล บึงยีโถ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล รังสิต - ตำบล บึงยีโถ",
                "@style": "top: 615px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "355",
                "@data-name": "ตำบล บึงยีโถ - ตำบล รังสิต",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล บึงยีโถ - ตำบล รังสิต",
                "@style": "top: 615px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "356",
                "@data-name": "ตำบล บึงยีโถ - ตำบล คลองสี่",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล บึงยีโถ - ตำบล คลองสี่",
                "@style": "top: 532px; left: 1426px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "357",
                "@data-name": "ตำบล คลองสี่ - ตำบล บึงยีโถ",
                "@data-angle": "0",
                "@src": "green/059.png",
                "@class": "chunk",
                "@title": "ตำบล คลองสี่ - ตำบล บึงยีโถ",
                "@style": "top: 532px; left: 1444px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "686",
                "@data-name": "ตำบล คลองสี่ - ตำบล คลองสาม",
                "@data-angle": "0",
                "@src": "green/122-1.png",
                "@class": "chunk",
                "@title": "ตำบล คลองสี่ - ตำบล คลองสาม",
                "@style": "top: 476px; left: 1402px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "691",
                "@data-name": "ตำบล คลองสาม - ตำบล คลองสี่",
                "@data-angle": "0",
                "@src": "green/122-2.png",
                "@class": "chunk",
                "@title": "ตำบล คลองสาม - ตำบล คลองสี่",
                "@style": "top: 464px; left: 1414px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "368",
                "@data-name": "ตำบล คลองสาม - ตำบล พยอม",
                "@data-angle": "0",
                "@src": "green/058.png",
                "@class": "chunk",
                "@title": "ตำบล คลองสาม - ตำบล พยอม",
                "@style": "top: 397px; left: 1322px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "369",
                "@data-name": "ตำบล พยอม - ตำบล คลองสาม",
                "@data-angle": "0",
                "@src": "green/058.png",
                "@class": "chunk",
                "@title": "ตำบล พยอม - ตำบล คลองสาม",
                "@style": "top: 384px; left: 1334px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "370",
                "@data-name": "ตำบล พยอม - ตำบล ลำไทร",
                "@data-angle": "0",
                "@src": "green/058.png",
                "@class": "chunk",
                "@title": "ตำบล พยอม - ตำบล ลำไทร",
                "@style": "top: 316px; left: 1242px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "371",
                "@data-name": "ตำบล ลำไทร - ตำบล พยอม",
                "@data-angle": "0",
                "@src": "green/058.png",
                "@class": "chunk",
                "@title": "ตำบล ลำไทร - ตำบล พยอม",
                "@style": "top: 304px; left: 1254px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "6",
        "img": [
            {
                "@data-id": "72",
                "@data-name": "บางพลีน้อย - บางสมัคร",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางพลีน้อย - บางสมัคร",
                "@style": "top: 1727px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "73",
                "@data-name": "บางประกง 2 - ชลบุรี",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางประกง 2 - ชลบุรี",
                "@style": "top: 1919px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "260",
                "@data-name": "บางนา - บางนา กม.6",
                "@data-angle": "0",
                "@src": "green/016.png",
                "@class": "chunk",
                "@title": "บางนา - บางนา กม.6",
                "@style": "top: 1494px; left: 1282px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "262",
                "@data-name": "ทางลงบางแก้ว (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางแก้ว (A)",
                "@style": "top: 1478px; left: 1346px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "263",
                "@data-name": "ทางขึ้นบางแก้ว (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางแก้ว (B)",
                "@style": "top: 1514px; left: 1346px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "264",
                "@data-name": "ทางขึ้นบางนา กม.6",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางนา กม.6",
                "@style": "top: 1514px; left: 1293px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "265",
                "@data-name": "บางนา กม.6 - บางแก้ว",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "บางนา กม.6 - บางแก้ว",
                "@style": "top: 1494px; left: 1299px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "266",
                "@data-name": "บางแก้ว - บางพลี1",
                "@data-angle": "0",
                "@src": "green/033.png",
                "@class": "chunk",
                "@title": "บางแก้ว - บางพลี1",
                "@style": "top: 1494px; left: 1351px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "268",
                "@data-name": "บางพลี1 - บางพลี2",
                "@data-angle": "0",
                "@src": "green/024.png",
                "@class": "chunk",
                "@title": "บางพลี1 - บางพลี2",
                "@style": "top: 1494px; left: 1488px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "270",
                "@data-name": "บางพลี 2 - สุวรรณภูมิ",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "บางพลี 2 - สุวรรณภูมิ",
                "@style": "top: 1494px; left: 1570px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "271",
                "@data-name": "ทางลงสุวรรณภูมิ (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงสุวรรณภูมิ (A)",
                "@style": "top: 1479px; left: 1616px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "272",
                "@data-name": "ทางขึ้นสุวรรณภูมิ (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุวรรณภูมิ (A)",
                "@style": "top: 1479px; left: 1598px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "273",
                "@data-name": "สุวรรณภูมิ - เมืองใหม่บางพลี",
                "@data-angle": "0",
                "@src": "green/114-1.png",
                "@class": "chunk",
                "@title": "สุวรรณภูมิ - เมืองใหม่บางพลี",
                "@style": "top: 1494px; left: 1622px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "596",
                "@data-name": "เมืองใหม่บางพลี - สุวรรณภูมิ",
                "@data-angle": "0",
                "@src": "green/114-2.png",
                "@class": "chunk",
                "@title": "เมืองใหม่บางพลี - สุวรรณภูมิ",
                "@style": "top: 1510px; left: 1622px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "281",
                "@data-name": "ทางลงบางนา กม.6",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางนา กม.6",
                "@style": "top: 1479px; left: 1293px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "282",
                "@data-name": "บางนา กม.6 - บางนา",
                "@data-angle": "0",
                "@src": "green/016.png",
                "@class": "chunk",
                "@title": "บางนา กม.6 - บางนา",
                "@style": "top: 1511px; left: 1281px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "283",
                "@data-name": "บางแก้ว - บางนา กม.6",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "บางแก้ว - บางนา กม.6",
                "@style": "top: 1511px; left: 1299px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "284",
                "@data-name": "บางพลี1 - บางแก้ว",
                "@data-angle": "0",
                "@src": "green/033.png",
                "@class": "chunk",
                "@title": "บางพลี1 - บางแก้ว",
                "@style": "top: 1511px; left: 1349px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "583",
                "@data-name": "บางพลี2 - บางพลี1",
                "@data-angle": "0",
                "@src": "green/024.png",
                "@class": "chunk",
                "@title": "บางพลี2 - บางพลี1",
                "@style": "top: 1511px; left: 1488px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "288",
                "@data-name": "สุวรรณภูมิ - บางพลี2",
                "@data-angle": "0",
                "@src": "green/015.png",
                "@class": "chunk",
                "@title": "สุวรรณภูมิ - บางพลี2",
                "@style": "top: 1511px; left: 1570px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "291",
                "@data-name": "ทางลงบางเสาธง",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางเสาธง",
                "@style": "top: 1600px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "292",
                "@data-name": "ทางขึ้นบางเสาธง",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางเสาธง",
                "@style": "top: 1600px; left: 1727px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "589",
                "@data-name": "เมืองใหม่บางพลี - บางเสาธง",
                "@data-angle": "0",
                "@src": "green/115-2.png",
                "@class": "chunk",
                "@title": "เมืองใหม่บางพลี - บางเสาธง",
                "@style": "top: 1510px; left: 1687px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "294",
                "@data-name": "ทางขึ้นบางบ่อ (A)",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางบ่อ (A)",
                "@style": "top: 1660px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "514",
                "@data-name": "ทางลงบางบ่อ (B)",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางบ่อ (B)",
                "@style": "top: 1661px; left: 1727px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "704",
                "@data-name": "บางเสาธง - บางบ่อ",
                "@data-angle": "0",
                "@src": "green/009-line-up.png",
                "@class": "chunk",
                "@title": "บางเสาธง - บางบ่อ",
                "@style": "top: 1605px; left: 1762px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "297",
                "@data-name": "ทางลงบางพลีน้อย",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางพลีน้อย",
                "@style": "top: 1698px; left: 1763px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "456",
                "@data-name": "ทางขึ้นบางพลีน้อย",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพลีน้อย",
                "@style": "top: 1698px; left: 1728px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "299",
                "@data-name": "บางบ่อ - บางพลีน้อย",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางบ่อ - บางพลีน้อย",
                "@style": "top: 1676px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "300",
                "@data-name": "บางพลีน้อย - บางบ่อ",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางพลีน้อย - บางบ่อ",
                "@style": "top: 1676px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "705",
                "@data-name": "บางบ่อ - บางเสาธง",
                "@data-angle": "0",
                "@src": "green/009-line-up.png",
                "@class": "chunk",
                "@title": "บางบ่อ - บางเสาธง",
                "@style": "top: 1603px; left: 1744px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "591",
                "@data-name": "บางเสาธง - เมืองใหม่บางพลี",
                "@data-angle": "0",
                "@src": "green/115-1.png",
                "@class": "chunk",
                "@title": "บางเสาธง - เมืองใหม่บางพลี",
                "@style": "top: 1522px; left: 1675px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "303",
                "@data-name": "ทางลงบางสมัคร",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางสมัคร",
                "@style": "top: 1755px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "307",
                "@data-name": "ทางลงบางประกง 1",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางประกง 1",
                "@style": "top: 1870px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "308",
                "@data-name": "ทางขึ้นบางประกง1",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางประกง1",
                "@style": "top: 1870px; left: 1727px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "309",
                "@data-name": "ทางขึ้นบางประกง2",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางประกง2",
                "@style": "top: 1917px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "310",
                "@data-name": "ทางลงบางประกง2",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงบางประกง2",
                "@style": "top: 1917px; left: 1728px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "312",
                "@data-name": "ทางลงชลบุรี",
                "@data-angle": "0",
                "@src": "green/001-inout-up.png",
                "@class": "chunk",
                "@title": "ทางลงชลบุรี",
                "@style": "top: 1964px; left: 1762px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "313",
                "@data-name": "ทางขึ้นชลบุรี",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นชลบุรี",
                "@style": "top: 1963px; left: 1727px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "314",
                "@data-name": "ชลบุรี - บางประกง 2",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "ชลบุรี - บางประกง 2",
                "@style": "top: 1919px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "315",
                "@data-name": "บางประกง2 - บางประกง1",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางประกง2 - บางประกง1",
                "@style": "top: 1880px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "316",
                "@data-name": "บางประกง1 - บางวัว",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางประกง1 - บางวัว",
                "@style": "top: 1829px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "317",
                "@data-name": "บางวัว - บางสมัคร",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางวัว - บางสมัคร",
                "@style": "top: 1778px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "318",
                "@data-name": "บางสมัคร - บางพลีน้อย",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางสมัคร - บางพลีน้อย",
                "@style": "top: 1727px; left: 1743px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "476",
                "@data-name": "ทางขึ้นบางนา (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางนา (A)",
                "@style": "top: 1479px; left: 1275px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "477",
                "@data-name": "ทางลงบางนา (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางนา (B)",
                "@style": "top: 1515px; left: 1274px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "481",
                "@data-name": "ทางขึ้นสุวรรณภูมิ (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นสุวรรณภูมิ (B)",
                "@style": "top: 1514px; left: 1616px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "480",
                "@data-name": "ทางลงสุวรรณภูมิ (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงสุวรรณภูมิ (B)",
                "@style": "top: 1514px; left: 1598px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "708",
                "@data-name": "บางสมัคร - บางวัว",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางสมัคร - บางวัว",
                "@style": "top: 1777px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "709",
                "@data-name": "บางวัว - บางประกง 1",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางวัว - บางประกง 1",
                "@style": "top: 1820px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "710",
                "@data-name": "บางประกง 1 - บางประกง 2",
                "@data-angle": "0",
                "@src": "green/011-line-up.png",
                "@class": "chunk",
                "@title": "บางประกง 1 - บางประกง 2",
                "@style": "top: 1870px; left: 1761px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "711",
                "@data-name": "ทางขึ้นบางสมัคร",
                "@data-angle": "0",
                "@src": "green/002-inout-up.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางสมัคร",
                "@style": "top: 1756px; left: 1726px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "7",
        "img": [
            {
                "@data-id": "700",
                "@data-name": "บางปะอิน - เชียงราก",
                "@data-angle": "0",
                "@src": "green/061.png",
                "@class": "chunk",
                "@title": "บางปะอิน - เชียงราก",
                "@style": "top: 327px; left: 333px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "78",
                "@data-name": "เชียงราก - บางพูน",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "เชียงราก - บางพูน",
                "@style": "top: 391px; left: 398px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "79",
                "@data-name": "บางพูน - ศรีสมาน",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "บางพูน - ศรีสมาน",
                "@style": "top: 438px; left: 446px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "80",
                "@data-name": "ศรีสมาน - เมืองทองธานี",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "ศรีสมาน - เมืองทองธานี",
                "@style": "top: 472px; left: 480px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "161",
                "@data-name": "ทางขึ้นบางปะอิน (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางปะอิน (A)",
                "@style": "top: 331px; left: 357px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "179",
                "@data-name": "ทางขึ้นบางพูน (B)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพูน (B)",
                "@style": "top: 453px; left: 429px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "424",
                "@data-name": "ทางขึ้นศรีสมาน (B)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นศรีสมาน (B)",
                "@style": "top: 491px; left: 469px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "443",
                "@data-name": "ทางลงเมืองทองธานี (B)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงเมืองทองธานี (B)",
                "@style": "top: 528px; left: 491px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "431",
                "@data-name": "ทางขึ้นเมืองทองธานี (B)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเมืองทองธานี (B)",
                "@style": "top: 534px; left: 511px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "185",
                "@data-name": "ทางลงแจ้งวัฒนะ (A)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงแจ้งวัฒนะ (A)",
                "@style": "top: 557px; left: 570px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "186",
                "@data-name": "เมืองทองธานี - แจ้งวัฒนะ ",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "เมืองทองธานี - แจ้งวัฒนะ ",
                "@style": "top: 513px; left: 521px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "419",
                "@data-name": "ทางขึ้นแจ้งวัฒนะ (ฺB)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นแจ้งวัฒนะ (ฺB)",
                "@style": "top: 576px; left: 553px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "189",
                "@data-name": "แจ้งวัฒนะ - เมืองทองธานี",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "แจ้งวัฒนะ - เมืองทองธานี",
                "@style": "top: 531px; left: 515px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "190",
                "@data-name": "เมืองทองธานี - ศรีสมาน",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "เมืองทองธานี - ศรีสมาน",
                "@style": "top: 486px; left: 470px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "421",
                "@data-name": "ทางลงศรีสมาน (B)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงศรีสมาน (B)",
                "@style": "top: 487px; left: 449px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "192",
                "@data-name": "ศรีสมาน - บางพูน",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "ศรีสมาน - บางพูน",
                "@style": "top: 447px; left: 431px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "422",
                "@data-name": "ทางลงบางพูน (B)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงบางพูน (B)",
                "@style": "top: 446px; left: 407px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "194",
                "@data-name": "บางพูน - เชียงราก",
                "@data-angle": "0",
                "@src": "green/017-line-upleft.png",
                "@class": "chunk",
                "@title": "บางพูน - เชียงราก",
                "@style": "top: 401px; left: 383px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "195",
                "@data-name": "ทางลงเชียงราก (B)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงเชียงราก (B)",
                "@style": "top: 406px; left: 368px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "699",
                "@data-name": "เชียงราก - บางปะอิน",
                "@data-angle": "0",
                "@src": "green/061.png",
                "@class": "chunk",
                "@title": "เชียงราก - บางปะอิน",
                "@style": "top: 337px; left: 318px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "197",
                "@data-name": "ทางลงบางปะอิน (B)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงบางปะอิน (B)",
                "@style": "top: 363px; left: 325px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "423",
                "@data-name": "ทางขึ้นเชียงราก (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเชียงราก (A)",
                "@style": "top: 374px; left: 399px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "425",
                "@data-name": "ทางลงบางพูน (A)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงบางพูน (A)",
                "@style": "top: 434px; left: 446px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "426",
                "@data-name": "ทางขึ้นบางพูน (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางพูน (A)",
                "@style": "top: 414px; left: 440px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "427",
                "@data-name": "ทางลงศรีสมาน (A)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงศรีสมาน (A)",
                "@style": "top: 474px; left: 487px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "428",
                "@data-name": "ทางขึ้นศรีสมาน (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นศรีสมาน (A)",
                "@style": "top: 454px; left: 481px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "444",
                "@data-name": "ทางลงเมืองทองธานี (A)",
                "@data-angle": "0",
                "@src": "green/008-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางลงเมืองทองธานี (A)",
                "@style": "top: 515px; left: 528px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "430",
                "@data-name": "ทางขึ้นเมืองทองธานี (A)",
                "@data-angle": "0",
                "@src": "green/007-inout-upleft.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเมืองทองธานี (A)",
                "@style": "top: 496px; left: 522px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "10",
        "img": [
            {
                "@data-id": "697",
                "@data-name": "บางขุนเทียน - บางครุ",
                "@data-angle": "0",
                "@src": "green/116-1_t5YizfQ.png",
                "@class": "chunk",
                "@title": "บางขุนเทียน - บางครุ",
                "@style": "top: 1531px; left: 147px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "601",
                "@data-name": "ทางลงบางครุ (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงบางครุ (B)",
                "@style": "top: 1823px; left: 456px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "602",
                "@data-name": "ทางขึ้นบางครุ (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางครุ (A)",
                "@style": "top: 1787px; left: 457px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "248",
                "@data-name": "บางครุ - ปู่เจ้า",
                "@data-angle": "0",
                "@src": "green/050.png",
                "@class": "chunk",
                "@title": "บางครุ - ปู่เจ้า",
                "@style": "top: 1803px; left: 466px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "604",
                "@data-name": "ทางลงปู่เจ้า (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงปู่เจ้า (B)",
                "@style": "top: 1824px; left: 729px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "603",
                "@data-name": "ทางขึ้นปู่เจ้า (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นปู่เจ้า (B)",
                "@style": "top: 1823px; left: 748px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "668",
                "@data-name": "ปู่เจ้า - ปากน้ำ",
                "@data-angle": "0",
                "@src": "green/051.png",
                "@class": "chunk",
                "@title": "ปู่เจ้า - ปากน้ำ",
                "@style": "top: 1802px; left: 746px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "607",
                "@data-name": "ทางลงปากน้ำ (B)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงปากน้ำ (B)",
                "@style": "top: 1823px; left: 962px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "609",
                "@data-name": "ทางขึ้นปากน้ำ (B)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นปากน้ำ (B)",
                "@style": "top: 1823px; left: 981px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "254",
                "@data-name": "ปากน้ำ - บางเมือง",
                "@data-angle": "0",
                "@src": "green/117-1.png",
                "@class": "chunk",
                "@title": "ปากน้ำ - บางเมือง",
                "@style": "top: 1777px; left: 979px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "611",
                "@data-name": "ทางลงบางเมือง (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงบางเมือง (B)",
                "@style": "top: 1793px; left: 1203px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "613",
                "@data-name": "ทางขึ้นบางเมือง (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางเมือง (B)",
                "@style": "top: 1788px; left: 1209px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "666",
                "@data-name": "บางเมือง - เทพารักษ์",
                "@data-angle": "0",
                "@src": "green/052.png",
                "@class": "chunk",
                "@title": "บางเมือง - เทพารักษ์",
                "@style": "top: 1687px; left: 1193px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "615",
                "@data-name": "ทางลงเทพารักษ์ (B)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงเทพารักษ์ (B)",
                "@style": "top: 1706px; left: 1292px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "616",
                "@data-name": "ทางขึ้นเทพารักษ์ (B)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเทพารักษ์ (B)",
                "@style": "top: 1701px; left: 1298px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "261",
                "@data-name": "เทพารักษ์ - บางแก้ว",
                "@data-angle": "0",
                "@src": "green/118-1.png",
                "@class": "chunk",
                "@title": "เทพารักษ์ - บางแก้ว",
                "@style": "top: 1529px; left: 1283px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "275",
                "@data-name": "บางแก้ว - เทพารักษ์",
                "@data-angle": "0",
                "@src": "green/118-2.png",
                "@class": "chunk",
                "@title": "บางแก้ว - เทพารักษ์",
                "@style": "top: 1531px; left: 1296px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "667",
                "@data-name": "เทพารักษ์ - บางเมือง",
                "@data-angle": "0",
                "@src": "green/052.png",
                "@class": "chunk",
                "@title": "เทพารักษ์ - บางเมือง",
                "@style": "top: 1701px; left: 1204px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "277",
                "@data-name": "บางเมือง - ปากน้ำ",
                "@data-angle": "0",
                "@src": "green/117-2.png",
                "@class": "chunk",
                "@title": "บางเมือง - ปากน้ำ",
                "@style": "top: 1789px; left: 978px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "278",
                "@data-name": "ปากน้ำ - ปู่เจ้า",
                "@data-angle": "0",
                "@src": "green/051.png",
                "@class": "chunk",
                "@title": "ปากน้ำ - ปู่เจ้า",
                "@style": "top: 1819px; left: 744px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "279",
                "@data-name": "ปู่เจ้า - บางครุ",
                "@data-angle": "0",
                "@src": "green/050.png",
                "@class": "chunk",
                "@title": "ปู่เจ้า - บางครุ",
                "@style": "top: 1821px; left: 466px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "698",
                "@data-name": "บางครุ - บางขุนเทียน",
                "@data-angle": "0",
                "@src": "green/116-2_jvmop4R.png",
                "@class": "chunk",
                "@title": "บางครุ - บางขุนเทียน",
                "@style": "top: 1531px; left: 130px; transform: rotate(0deg); z-index: 10005;"
            },
            {
                "@data-id": "605",
                "@data-name": "ทางลงปู่เจ้า (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงปู่เจ้า (A)",
                "@style": "top: 1788px; left: 748px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "606",
                "@data-name": "ทางขึ้นปู่เจ้า (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นปู่เจ้า (A)",
                "@style": "top: 1788px; left: 731px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "608",
                "@data-name": "ทางลงปากน้ำ (A)",
                "@data-angle": "0",
                "@src": "green/004-inout-left.png",
                "@class": "chunk",
                "@title": "ทางลงปากน้ำ (A)",
                "@style": "top: 1788px; left: 981px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "610",
                "@data-name": "ทางขึ้นปากน้ำ (A)",
                "@data-angle": "0",
                "@src": "green/003-inout-left.png",
                "@class": "chunk",
                "@title": "ทางขึ้นปากน้ำ (A)",
                "@style": "top: 1788px; left: 963px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "612",
                "@data-name": "ทางลงบางเมือง (A)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงบางเมือง (A)",
                "@style": "top: 1756px; left: 1191px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "614",
                "@data-name": "ทางขึ้นบางเมือง (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นบางเมือง (A)",
                "@style": "top: 1776px; left: 1171px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "617",
                "@data-name": "ทางขึ้นเทพารักษ์ (A)",
                "@data-angle": "0",
                "@src": "green/006-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางขึ้นเทพารักษ์ (A)",
                "@style": "top: 1688px; left: 1260px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "618",
                "@data-name": "ทางลงเทพารักษ์ (A)",
                "@data-angle": "0",
                "@src": "green/005-inout-upright.png",
                "@class": "chunk",
                "@title": "ทางลงเทพารักษ์ (A)",
                "@style": "top: 1667px; left: 1280px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    },
    {
        "@data-road-id": "9",
        "img": [
            {
                "@data-id": "321",
                "@data-name": "ลำไทร - เชียงรากน้อย",
                "@data-angle": "0",
                "@src": "green/055.png",
                "@class": "chunk",
                "@title": "ลำไทร - เชียงรากน้อย",
                "@style": "top: 269px; left: 1194px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "692",
                "@data-name": "เชียงรากน้อย - วงแหวนบางปะอิน",
                "@data-angle": "0",
                "@src": "green/119-2.png",
                "@class": "chunk",
                "@title": "เชียงรากน้อย - วงแหวนบางปะอิน",
                "@style": "top: 239px; left: 1012px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "677",
                "@data-name": "วงแหวนบางปะอิน - บางกระสั้น",
                "@data-angle": "0",
                "@src": "green/054.png",
                "@class": "chunk",
                "@title": "วงแหวนบางปะอิน - บางกระสั้น",
                "@style": "top: 239px; left: 934px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "324",
                "@data-name": "บางกระสั้น - โพธิ์แตง",
                "@data-angle": "0",
                "@src": "green/054.png",
                "@class": "chunk",
                "@title": "บางกระสั้น - โพธิ์แตง",
                "@style": "top: 239px; left: 856px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "325",
                "@data-name": "โพธิ์แตง - บางกระบือ",
                "@data-angle": "0",
                "@src": "green/053.png",
                "@class": "chunk",
                "@title": "โพธิ์แตง - บางกระบือ",
                "@style": "top: 239px; left: 625px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "341",
                "@data-name": "บางกระบือ - คลองควาย",
                "@data-angle": "0",
                "@src": "green/056.png",
                "@class": "chunk",
                "@title": "บางกระบือ - คลองควาย",
                "@style": "top: 239px; left: 461px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "678",
                "@data-name": "คลองควาย - บางเตย",
                "@data-angle": "0",
                "@src": "green/120-2.png",
                "@class": "chunk",
                "@title": "คลองควาย - บางเตย",
                "@style": "top: 238px; left: 227px; transform: rotate(0deg); z-index: 10010;"
            },
            {
                "@data-id": "344",
                "@data-name": "บางเตย - คูบางหลวง",
                "@data-angle": "0",
                "@src": "green/121-2.png",
                "@class": "chunk",
                "@title": "บางเตย - คูบางหลวง",
                "@style": "top: 424px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "352",
                "@data-name": "คูบางหลวง - คลองพระอุดม ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "คูบางหลวง - คลองพระอุดม ",
                "@style": "top: 557px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "353",
                "@data-name": "คลองพระอุดม - คลองข่อย",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "คลองพระอุดม - คลองข่อย",
                "@style": "top: 611px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "358",
                "@data-name": "คลองข่อย - ลำโพ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "คลองข่อย - ลำโพ",
                "@style": "top: 666px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "359",
                "@data-name": "ลำโพ - ละหาร ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ลำโพ - ละหาร ",
                "@style": "top: 719px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "362",
                "@data-name": "ละหาร - บางบัวทอง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ละหาร - บางบัวทอง",
                "@style": "top: 773px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "363",
                "@data-name": "บางบัวทอง - พิมลราช",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางบัวทอง - พิมลราช",
                "@style": "top: 827px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "364",
                "@data-name": "พิมลราช - บางรักพัฒนา",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "พิมลราช - บางรักพัฒนา",
                "@style": "top: 881px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "365",
                "@data-name": "บางรักพัฒนา - เสาธงหิน",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางรักพัฒนา - เสาธงหิน",
                "@style": "top: 936px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "366",
                "@data-name": "เสาธงหิน - บางแม่นาง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "เสาธงหิน - บางแม่นาง",
                "@style": "top: 989px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "367",
                "@data-name": "บางแม่นาง - บางม่วง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางแม่นาง - บางม่วง",
                "@style": "top: 1043px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "372",
                "@data-name": "บางม่วง - บางคูเวียง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางม่วง - บางคูเวียง",
                "@style": "top: 1097px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "373",
                "@data-name": "บางคูเวียง - ปลายทาง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางคูเวียง - ปลายทาง",
                "@style": "top: 1151px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "374",
                "@data-name": "ปลายทาง -  แขวง ศาลาธรรมสพน์",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ปลายทาง -  แขวง ศาลาธรรมสพน์",
                "@style": "top: 1206px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "375",
                "@data-name": "แขวง ศาลาธรรมสพน์ -  แขวง ทวีวัฒนา",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง ศาลาธรรมสพน์ -  แขวง ทวีวัฒนา",
                "@style": "top: 1259px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "376",
                "@data-name": "แขวง ทวีวัฒนา - แขวง บางไผ่",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง ทวีวัฒนา - แขวง บางไผ่",
                "@style": "top: 1313px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "377",
                "@data-name": "แขวง บางไผ่ -  แขวง บางแคเหนือ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง บางไผ่ -  แขวง บางแคเหนือ",
                "@style": "top: 1367px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "380",
                "@data-name": " แขวง บางบอน - แขวง แสมดำ ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": " แขวง บางบอน - แขวง แสมดำ ",
                "@style": "top: 1422px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "381",
                "@data-name": "แขวง แสมดำ - แขวง ท่าข้าม",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง แสมดำ - แขวง ท่าข้าม",
                "@style": "top: 1477px; left: 148px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "384",
                "@data-name": "แขวง บางบอน - แขวง หลักสอง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง บางบอน - แขวง หลักสอง",
                "@style": "top: 1476px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "687",
                "@data-name": "แขวง หลักสอง - แขวง บางแคเหนือ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง หลักสอง - แขวง บางแคเหนือ",
                "@style": "top: 1421px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "386",
                "@data-name": "แขวง บางแคเหนือ - แขแขวง บางไผ่ ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง บางแคเหนือ - แขแขวง บางไผ่ ",
                "@style": "top: 1367px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "387",
                "@data-name": "แขวง บางไผ่ - แขวง ทวีวัฒนา",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง บางไผ่ - แขวง ทวีวัฒนา",
                "@style": "top: 1313px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "388",
                "@data-name": "แขวง ทวีวัฒนา - แขวง ศาลาธรรมสพน์ ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง ทวีวัฒนา - แขวง ศาลาธรรมสพน์ ",
                "@style": "top: 1259px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "389",
                "@data-name": "แขวง ศาลาธรรมสพน์ - ปลายทาง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "แขวง ศาลาธรรมสพน์ - ปลายทาง",
                "@style": "top: 1206px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "390",
                "@data-name": "ปลายทาง - บางคูเวียง ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ปลายทาง - บางคูเวียง ",
                "@style": "top: 1151px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "391",
                "@data-name": "บางคูเวียง - บางม่วง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางคูเวียง - บางม่วง",
                "@style": "top: 1097px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "392",
                "@data-name": "บางม่วง - บางแม่นาง ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางม่วง - บางแม่นาง ",
                "@style": "top: 1043px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "393",
                "@data-name": "บางแม่นาง - เสาธงหิน ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางแม่นาง - เสาธงหิน ",
                "@style": "top: 989px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "394",
                "@data-name": "เสาธงหิน - บางรักพัฒนา ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "เสาธงหิน - บางรักพัฒนา ",
                "@style": "top: 936px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "395",
                "@data-name": "บางรักพัฒนา - พิมลราช ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางรักพัฒนา - พิมลราช ",
                "@style": "top: 881px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "396",
                "@data-name": "พิมลราช - บางบัวทอง",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "พิมลราช - บางบัวทอง",
                "@style": "top: 827px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "397",
                "@data-name": "บางบัวทอง - ละหาร ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "บางบัวทอง - ละหาร ",
                "@style": "top: 773px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "398",
                "@data-name": "ละหาร - ลำโพ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ละหาร - ลำโพ",
                "@style": "top: 719px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "399",
                "@data-name": "ลำโพ - คลองข่อย",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "ลำโพ - คลองข่อย",
                "@style": "top: 666px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "400",
                "@data-name": "คลองข่อย - คลองพระอุดม ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "คลองข่อย - คลองพระอุดม ",
                "@style": "top: 611px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "401",
                "@data-name": "คลองพระอุดม - คูบางหลวง ",
                "@data-angle": "0",
                "@src": "green/057.png",
                "@class": "chunk",
                "@title": "คลองพระอุดม - คูบางหลวง ",
                "@style": "top: 557px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "402",
                "@data-name": "คูบางหลวง -  บางเตย",
                "@data-angle": "0",
                "@src": "green/121-1.png",
                "@class": "chunk",
                "@title": "คูบางหลวง -  บางเตย",
                "@style": "top: 412px; left: 130px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "683",
                "@data-name": "บางเตย - คลองควาย ",
                "@data-angle": "0",
                "@src": "green/120-1.png",
                "@class": "chunk",
                "@title": "บางเตย - คลองควาย ",
                "@style": "top: 222px; left: 214px; transform: rotate(0deg); z-index: 10010;"
            },
            {
                "@data-id": "404",
                "@data-name": "คลองควาย - บางกระบือ",
                "@data-angle": "0",
                "@src": "green/056.png",
                "@class": "chunk",
                "@title": "คลองควาย - บางกระบือ",
                "@style": "top: 222px; left: 461px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "682",
                "@data-name": "บางกระบือ - โพธิ์แตง",
                "@data-angle": "0",
                "@src": "green/053.png",
                "@class": "chunk",
                "@title": "บางกระบือ - โพธิ์แตง",
                "@style": "top: 222px; left: 625px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "681",
                "@data-name": "โพธิ์แตง - บางกระสั้น ",
                "@data-angle": "0",
                "@src": "green/054.png",
                "@class": "chunk",
                "@title": "โพธิ์แตง - บางกระสั้น ",
                "@style": "top: 222px; left: 856px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "407",
                "@data-name": "บางกระสั้น - วงแหวนบางปะอิน",
                "@data-angle": "0",
                "@src": "green/054.png",
                "@class": "chunk",
                "@title": "บางกระสั้น - วงแหวนบางปะอิน",
                "@style": "top: 222px; left: 934px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "680",
                "@data-name": "วงแหวนบางปะอิน - เชียงรากน้อย",
                "@data-angle": "0",
                "@src": "green/119-1.png",
                "@class": "chunk",
                "@title": "วงแหวนบางปะอิน - เชียงรากน้อย",
                "@style": "top: 222px; left: 1012px; transform: rotate(0deg); z-index: 10000;"
            },
            {
                "@data-id": "409",
                "@data-name": "เชียงรากน้อย - ลำไทร",
                "@data-angle": "0",
                "@src": "green/055.png",
                "@class": "chunk",
                "@title": "เชียงรากน้อย - ลำไทร",
                "@style": "top: 257px; left: 1207px; transform: rotate(0deg); z-index: 10000;"
            }
        ]
    }
];
