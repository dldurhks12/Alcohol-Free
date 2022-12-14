// fetch local data
let locals = {};
fetch("./local.json")
  .then((resp) => {
    return resp.json();
  })
  .then((local) => {
    locals = local.locals;
  });

// 지도에 폴리곤으로 표시할 영역데이터 배열입니다
var areas = [
  {
    id: 1,
    name: "신동",
    path: [
      new kakao.maps.LatLng(35.983071, 126.910164),
      new kakao.maps.LatLng(35.972374, 126.916687),
      new kakao.maps.LatLng(35.972191, 126.92154),
      new kakao.maps.LatLng(35.962509, 126.922669),
      new kakao.maps.LatLng(35.959677, 126.928537),
      new kakao.maps.LatLng(35.962509, 126.937905),
      new kakao.maps.LatLng(35.959677, 126.938808),
      new kakao.maps.LatLng(35.960956, 126.944451),
      new kakao.maps.LatLng(35.963605, 126.944451),
      new kakao.maps.LatLng(35.964336, 126.948965),
      new kakao.maps.LatLng(35.955749, 126.952689),
      new kakao.maps.LatLng(35.957211, 126.967926),
      new kakao.maps.LatLng(35.974658, 126.968377),
      new kakao.maps.LatLng(35.975754, 126.963975),
      new kakao.maps.LatLng(35.983699, 126.960815),
      new kakao.maps.LatLng(35.987078, 126.956301),
      new kakao.maps.LatLng(35.988631, 126.945692),
      new kakao.maps.LatLng(35.98443, 126.932149),
      new kakao.maps.LatLng(35.983071, 126.910164),
    ],
  },
  {
    id: 2,
    name: "영등동",
    path: [
      new kakao.maps.LatLng(35.974474, 126.96836),
      new kakao.maps.LatLng(35.974474, 126.969603),
      new kakao.maps.LatLng(35.964953, 126.978633),
      new kakao.maps.LatLng(35.965355, 126.98029),
      new kakao.maps.LatLng(35.958583, 126.981615),
      new kakao.maps.LatLng(35.958516, 126.97855),
      new kakao.maps.LatLng(35.951274, 126.979213),
      new kakao.maps.LatLng(35.949798, 126.977473),
      new kakao.maps.LatLng(35.948256, 126.978136),
      new kakao.maps.LatLng(35.948323, 126.97913),
      new kakao.maps.LatLng(35.947652, 126.979544),
      new kakao.maps.LatLng(35.947451, 126.97855),
      new kakao.maps.LatLng(35.946982, 126.979213),
      new kakao.maps.LatLng(35.946244, 126.978302),
      new kakao.maps.LatLng(35.946617, 126.977579),
      new kakao.maps.LatLng(35.946376, 126.976865),
      new kakao.maps.LatLng(35.947147, 126.975495),
      new kakao.maps.LatLng(35.945605, 126.970255),
      new kakao.maps.LatLng(35.945942, 126.965849),
      new kakao.maps.LatLng(35.948304, 126.96174),
      new kakao.maps.LatLng(35.958089, 126.96823),
      new kakao.maps.LatLng(35.96315, 126.967635),
      new kakao.maps.LatLng(35.974474, 126.96836),
    ],
  },
  {
    id: 3,
    name: "모현동",
    path: [
      new kakao.maps.LatLng(35.960493, 126.929017),
      new kakao.maps.LatLng(35.957744, 126.932693),
      new kakao.maps.LatLng(35.955845, 126.931363),
      new kakao.maps.LatLng(35.9544, 126.932133),
      new kakao.maps.LatLng(35.953691, 126.931573),
      new kakao.maps.LatLng(35.950538, 126.933487),
      new kakao.maps.LatLng(35.946102, 126.932588),
      new kakao.maps.LatLng(35.940695, 126.942948),
      new kakao.maps.LatLng(35.943745, 126.946801),
      new kakao.maps.LatLng(35.950468, 126.949155),
      new kakao.maps.LatLng(35.953293, 126.953179),
      new kakao.maps.LatLng(35.955996, 126.954057),
      new kakao.maps.LatLng(35.95629, 126.9538),
      new kakao.maps.LatLng(35.955753, 126.953607),
      new kakao.maps.LatLng(35.955857, 126.952558),
      new kakao.maps.LatLng(35.959495, 126.952515),
      new kakao.maps.LatLng(35.96348, 126.948941),
      new kakao.maps.LatLng(35.964537, 126.949027),
      new kakao.maps.LatLng(35.964381, 126.947721),
      new kakao.maps.LatLng(35.964953, 126.947164),
      new kakao.maps.LatLng(35.96251, 126.943611),
      new kakao.maps.LatLng(35.961029, 126.94437),
      new kakao.maps.LatLng(35.960234, 126.942897),
      new kakao.maps.LatLng(35.960595, 126.941649),
      new kakao.maps.LatLng(35.960772, 126.938751),
      new kakao.maps.LatLng(35.962549, 126.938004),
      new kakao.maps.LatLng(35.960559, 126.93392),
      new kakao.maps.LatLng(35.960493, 126.929017),
    ],
  },
  {
    id: 4,
    name: "어양동",
    path: [
      new kakao.maps.LatLng(35.970111, 126.973596),
      new kakao.maps.LatLng(35.965074, 126.978558),
      new kakao.maps.LatLng(35.965418, 126.980417),
      new kakao.maps.LatLng(35.965388, 126.980369),
      new kakao.maps.LatLng(35.958726, 126.981515),
      new kakao.maps.LatLng(35.958599, 126.978598),
      new kakao.maps.LatLng(35.957924, 126.978545),
      new kakao.maps.LatLng(35.956765, 126.977789),
      new kakao.maps.LatLng(35.955396, 126.978765),
      new kakao.maps.LatLng(35.951395, 126.979155),
      new kakao.maps.LatLng(35.951026, 126.978374),
      new kakao.maps.LatLng(35.951411, 126.97792),
      new kakao.maps.LatLng(35.95129, 126.977727),
      new kakao.maps.LatLng(35.950587, 126.977877),
      new kakao.maps.LatLng(35.949873, 126.977398),
      new kakao.maps.LatLng(35.94825, 126.978095),
      new kakao.maps.LatLng(35.948426, 126.978967),
      new kakao.maps.LatLng(35.94765, 126.97949),
      new kakao.maps.LatLng(35.947438, 126.978444),
      new kakao.maps.LatLng(35.946595, 126.982103),
      new kakao.maps.LatLng(35.948007, 126.989195),
      new kakao.maps.LatLng(35.952439, 126.994474),
      new kakao.maps.LatLng(35.955551, 126.989977),
      new kakao.maps.LatLng(35.956257, 126.99043),
      new kakao.maps.LatLng(35.956804, 126.989324),
      new kakao.maps.LatLng(35.956398, 126.987819),
      new kakao.maps.LatLng(35.956531, 126.985288),
      new kakao.maps.LatLng(35.958926, 126.984776),
      new kakao.maps.LatLng(35.958811, 126.986141),
      new kakao.maps.LatLng(35.960963, 126.98731),
      new kakao.maps.LatLng(35.961728, 126.98714),
      new kakao.maps.LatLng(35.961714, 126.986693),
      new kakao.maps.LatLng(35.962458, 126.986244),
      new kakao.maps.LatLng(35.962013, 126.984407),
      new kakao.maps.LatLng(35.964367, 126.984178),
      new kakao.maps.LatLng(35.964906, 126.985295),
      new kakao.maps.LatLng(35.968419, 126.98419),
      new kakao.maps.LatLng(35.970199, 126.985214),
      new kakao.maps.LatLng(35.972249, 126.978411),
      new kakao.maps.LatLng(35.970111, 126.973596),
    ],
  },
  {
    id: 5,
    name: "부송동",
    path: [
      new kakao.maps.LatLng(35.9744445, 126.969717),
      new kakao.maps.LatLng(35.970714, 126.973245),
      new kakao.maps.LatLng(35.97202, 126.978494),
      new kakao.maps.LatLng(35.970116, 126.98516),
      new kakao.maps.LatLng(35.968474, 126.984092),
      new kakao.maps.LatLng(35.965104, 126.985436),
      new kakao.maps.LatLng(35.963841, 126.983937),
      new kakao.maps.LatLng(35.962036, 126.984336),
      new kakao.maps.LatLng(35.962291, 126.986321),
      new kakao.maps.LatLng(35.961696, 126.986566),
      new kakao.maps.LatLng(35.961746, 126.987116),
      new kakao.maps.LatLng(35.961069, 126.987341),
      new kakao.maps.LatLng(35.961009, 126.986698),
      new kakao.maps.LatLng(35.958875, 126.986138),
      new kakao.maps.LatLng(35.958728, 126.985481),
      new kakao.maps.LatLng(35.959031, 126.985159),
      new kakao.maps.LatLng(35.958929, 126.98478),
      new kakao.maps.LatLng(35.958221, 126.985033),
      new kakao.maps.LatLng(35.956213, 126.985815),
      new kakao.maps.LatLng(35.95624, 126.990319),
      new kakao.maps.LatLng(35.952984, 126.994059),
      new kakao.maps.LatLng(35.958526, 127.001449),
      new kakao.maps.LatLng(35.965618, 127.002199),
      new kakao.maps.LatLng(35.965985, 127.004022),
      new kakao.maps.LatLng(35.96457, 127.00538),
      new kakao.maps.LatLng(35.964775, 127.00835),
      new kakao.maps.LatLng(35.972273, 127.009546),
      new kakao.maps.LatLng(35.973514, 127.007931),
      new kakao.maps.LatLng(35.973449, 127.0022),
      new kakao.maps.LatLng(35.979393, 127.00212),
      new kakao.maps.LatLng(35.979066, 126.990577),
      new kakao.maps.LatLng(35.977159, 126.981385),
      new kakao.maps.LatLng(35.9744445, 126.969717),
    ],
  },
  {
    id: 6,
    name: "동산동",
    path: [
      new kakao.maps.LatLng(35.940204, 126.970376),
      new kakao.maps.LatLng(35.934335, 126.9722),
      new kakao.maps.LatLng(35.935439, 126.966385),
      new kakao.maps.LatLng(35.933034, 126.959524),
      new kakao.maps.LatLng(35.927279, 126.955271),
      new kakao.maps.LatLng(35.925626, 126.957171),
      new kakao.maps.LatLng(35.924658, 126.954567),
      new kakao.maps.LatLng(35.912006, 126.947531),
      new kakao.maps.LatLng(35.910126, 126.948023),
      new kakao.maps.LatLng(35.90967, 126.952879),
      new kakao.maps.LatLng(35.912291, 126.951401),
      new kakao.maps.LatLng(35.916224, 126.955834),
      new kakao.maps.LatLng(35.908758, 126.955975),
      new kakao.maps.LatLng(35.895169, 126.981439),
      new kakao.maps.LatLng(35.89655, 126.98594),
      new kakao.maps.LatLng(35.894315, 126.99033),
      new kakao.maps.LatLng(35.903358, 126.995222),
      new kakao.maps.LatLng(35.909352, 126.982302),
      new kakao.maps.LatLng(35.912013, 126.983912),
      new kakao.maps.LatLng(35.915821, 126.987413),
      new kakao.maps.LatLng(35.917294, 126.987868),
      new kakao.maps.LatLng(35.918154, 126.993411),
      new kakao.maps.LatLng(35.925986, 126.997539),
      new kakao.maps.LatLng(35.92971, 126.982561),
      new kakao.maps.LatLng(35.932384, 126.983563),
      new kakao.maps.LatLng(35.933206, 126.980667),
      new kakao.maps.LatLng(35.93595, 126.980168),
      new kakao.maps.LatLng(35.940067, 126.974685),
      new kakao.maps.LatLng(35.940309, 126.970598),
      new kakao.maps.LatLng(35.940204, 126.970376),
    ],
  },
  {
    id: 7,
    name: "송학동",
    path: [
      new kakao.maps.LatLng(35.94677, 126.932161),
      new kakao.maps.LatLng(35.941977, 126.927783),
      new kakao.maps.LatLng(35.941153, 126.92732),
      new kakao.maps.LatLng(35.939905, 126.922818),
      new kakao.maps.LatLng(35.937183, 126.922274),
      new kakao.maps.LatLng(35.935332, 126.933127),
      new kakao.maps.LatLng(35.935238, 126.942158),
      new kakao.maps.LatLng(35.937215, 126.94367),
      new kakao.maps.LatLng(35.937811, 126.943127),
      new kakao.maps.LatLng(35.937811, 126.944096),
      new kakao.maps.LatLng(35.93982, 126.944096),
      new kakao.maps.LatLng(35.942299, 126.941267),
      new kakao.maps.LatLng(35.945813, 126.932739),
      new kakao.maps.LatLng(35.946641, 126.932734),
      new kakao.maps.LatLng(35.94677, 126.932161),
    ],
  },
  {
    id: 8,
    name: "인화동",
    path: [
      new kakao.maps.LatLng(35.939505, 126.955204),
      new kakao.maps.LatLng(35.93405, 126.953864),
      new kakao.maps.LatLng(35.936065, 126.949424),
      new kakao.maps.LatLng(35.92968, 126.944868),
      new kakao.maps.LatLng(35.926673, 126.945175),
      new kakao.maps.LatLng(35.925185, 126.943452),
      new kakao.maps.LatLng(35.922274, 126.946311),
      new kakao.maps.LatLng(35.915538, 126.944172),
      new kakao.maps.LatLng(35.912977, 126.944112),
      new kakao.maps.LatLng(35.912566, 126.945067),
      new kakao.maps.LatLng(35.914209, 126.946901),
      new kakao.maps.LatLng(35.911842, 126.947393),
      new kakao.maps.LatLng(35.912337, 126.948691),
      new kakao.maps.LatLng(35.913859, 126.949824),
      new kakao.maps.LatLng(35.9145, 126.95037),
      new kakao.maps.LatLng(35.917748, 126.950816),
      new kakao.maps.LatLng(35.920399, 126.953621),
      new kakao.maps.LatLng(35.923947, 126.955511),
      new kakao.maps.LatLng(35.925595, 126.958249),
      new kakao.maps.LatLng(35.927528, 126.956003),
      new kakao.maps.LatLng(35.933448, 126.961145),
      new kakao.maps.LatLng(35.939533, 126.955286),
    ],
  },
  {
    id: 9,
    name: "팔봉동",
    path: [
      new kakao.maps.LatLng(35.993109, 127.010466),
      new kakao.maps.LatLng(35.990331, 127.006175),
      new kakao.maps.LatLng(35.984497, 127.006175),
      new kakao.maps.LatLng(35.98033, 127.001712),
      new kakao.maps.LatLng(35.973245, 127.002398),
      new kakao.maps.LatLng(35.972551, 127.009265),
      new kakao.maps.LatLng(35.964493, 127.008406),
      new kakao.maps.LatLng(35.965743, 127.004287),
      new kakao.maps.LatLng(35.965604, 127.001712),
      new kakao.maps.LatLng(35.962409, 127.002227),
      new kakao.maps.LatLng(35.947818, 126.988837),
      new kakao.maps.LatLng(35.943927, 126.969439),
      new kakao.maps.LatLng(35.940036, 126.971499),
      new kakao.maps.LatLng(35.933364, 126.982829),
      new kakao.maps.LatLng(35.929194, 126.982829),
      new kakao.maps.LatLng(35.926787, 126.997805),
      new kakao.maps.LatLng(35.929648, 126.999476),
      new kakao.maps.LatLng(35.928716, 127.012328),
      new kakao.maps.LatLng(35.939898, 127.017219),
      new kakao.maps.LatLng(35.946809, 127.013958),
      new kakao.maps.LatLng(35.961742, 127.031086),
      new kakao.maps.LatLng(35.961897, 127.037355),
      new kakao.maps.LatLng(35.965272, 127.04328),
      new kakao.maps.LatLng(35.969623, 127.053154),
      new kakao.maps.LatLng(35.980935, 127.047138),
      new kakao.maps.LatLng(35.983458, 127.041145),
      new kakao.maps.LatLng(35.98626, 127.029513),
      new kakao.maps.LatLng(35.991013, 127.02493),
      new kakao.maps.LatLng(35.993109, 127.010466),
    ],
  },
  {
    id: 10,
    name: "남중동",
    path: [
      new kakao.maps.LatLng(35.950517, 126.949161),
      new kakao.maps.LatLng(35.94519, 126.947463),
      new kakao.maps.LatLng(35.943587, 126.949685),
      new kakao.maps.LatLng(35.943128, 126.951991),
      new kakao.maps.LatLng(35.941066, 126.95475),
      new kakao.maps.LatLng(35.939978, 126.954962),
      new kakao.maps.LatLng(35.942269, 126.958783),
      new kakao.maps.LatLng(35.952751, 126.965009),
      new kakao.maps.LatLng(35.954383, 126.964832),
      new kakao.maps.LatLng(35.955357, 126.966672),
      new kakao.maps.LatLng(35.956645, 126.966176),
      new kakao.maps.LatLng(35.957229, 126.9609),
      new kakao.maps.LatLng(35.95612, 126.960117),
      new kakao.maps.LatLng(35.956635, 126.957669),
      new kakao.maps.LatLng(35.955209, 126.953607),
      new kakao.maps.LatLng(35.950517, 126.949161),
    ],
  },
  {
    id: 11,
    name: "평화동",
    path: [
      new kakao.maps.LatLng(35.936692, 126.920824),
      new kakao.maps.LatLng(35.920174, 126.911443),
      new kakao.maps.LatLng(35.912336, 126.926184),
      new kakao.maps.LatLng(35.910406, 126.926631),
      new kakao.maps.LatLng(35.911009, 126.931693),
      new kakao.maps.LatLng(35.91393, 126.930139),
      new kakao.maps.LatLng(35.913567, 126.938292),
      new kakao.maps.LatLng(35.91139, 126.939367),
      new kakao.maps.LatLng(35.910665, 126.943489),
      new kakao.maps.LatLng(35.911898, 126.947521),
      new kakao.maps.LatLng(35.921332, 126.946266),
      new kakao.maps.LatLng(35.92554, 126.942951),
      new kakao.maps.LatLng(35.935407, 126.949402),
      new kakao.maps.LatLng(35.93751, 126.946177),
      new kakao.maps.LatLng(35.935407, 126.941697),
      new kakao.maps.LatLng(35.936692, 126.920824),
    ],
  },
  {
    id: 12,
    name: "마동",
    path: [
      new kakao.maps.LatLng(35.948433, 126.961774),
      new kakao.maps.LatLng(35.942735, 126.958632),
      new kakao.maps.LatLng(35.939364, 126.955509),
      new kakao.maps.LatLng(35.933388, 126.961345),
      new kakao.maps.LatLng(35.935395, 126.966151),
      new kakao.maps.LatLng(35.934046, 126.967394),
      new kakao.maps.LatLng(35.934195, 126.972185),
      new kakao.maps.LatLng(35.943011, 126.968873),
      new kakao.maps.LatLng(35.94512, 126.970576),
      new kakao.maps.LatLng(35.945959, 126.965994),
      new kakao.maps.LatLng(35.948433, 126.961774),
    ],
  },
  {
    id: 13,
    name: "중앙동",
    path: [
      new kakao.maps.LatLng(35.944744, 126.947607),
      new kakao.maps.LatLng(35.944223, 126.9469),
      new kakao.maps.LatLng(35.944328, 126.946337),
      new kakao.maps.LatLng(35.943742, 126.946787),
      new kakao.maps.LatLng(35.943495, 126.946595),
      new kakao.maps.LatLng(35.943293, 126.945518),
      new kakao.maps.LatLng(35.94183, 126.945421),
      new kakao.maps.LatLng(35.940665, 126.943069),
      new kakao.maps.LatLng(35.940181, 126.94383),
      new kakao.maps.LatLng(35.940357, 126.94459),
      new kakao.maps.LatLng(35.939785, 126.943938),
      new kakao.maps.LatLng(35.938949, 126.944617),
      new kakao.maps.LatLng(35.938887, 126.944698),
      new kakao.maps.LatLng(35.937794, 126.944087),
      new kakao.maps.LatLng(35.937768, 126.943235),
      new kakao.maps.LatLng(35.937182, 126.943605),
      new kakao.maps.LatLng(35.937039, 126.942785),
      new kakao.maps.LatLng(35.936727, 126.943203),
      new kakao.maps.LatLng(35.936922, 126.943749),
      new kakao.maps.LatLng(35.936219, 126.944135),
      new kakao.maps.LatLng(35.935738, 126.945807),
      new kakao.maps.LatLng(35.937156, 126.946193),
      new kakao.maps.LatLng(35.933903, 126.953716),
      new kakao.maps.LatLng(35.936883, 126.954745),
      new kakao.maps.LatLng(35.939525, 126.955291),
      new kakao.maps.LatLng(35.941113, 126.954954),
      new kakao.maps.LatLng(35.943247, 126.952542),
      new kakao.maps.LatLng(35.943664, 126.949469),
      new kakao.maps.LatLng(35.944744, 126.947607),
    ],
  },
];

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(35.948077, 126.957747), // 지도의 중심좌표
    level: 8, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption),
  customOverlay = new kakao.maps.CustomOverlay({}),
  infowindow = new kakao.maps.InfoWindow({ removable: true });

// 지도에 영역데이터를 폴리곤으로 표시합니다
for (var i = 0, len = areas.length; i < len; i++) {
  displayArea(areas[i]);
}

// 다각형을 생상하고 이벤트를 등록하는 함수입니다
function displayArea(area) {
  // 다각형을 생성합니다
  var polygon = new kakao.maps.Polygon({
    map: map, // 다각형을 표시할 지도 객체
    path: area.path,
    strokeWeight: 2,
    strokeColor: "#004c80",
    strokeOpacity: 0.8,
    fillColor: "#fff",
    fillOpacity: 0.7,
  });

  // 다각형에 mouseover 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 변경합니다
  // 지역명을 표시하는 커스텀오버레이를 지도위에 표시합니다
  kakao.maps.event.addListener(polygon, "mouseover", function (mouseEvent) {
    polygon.setOptions({ fillColor: "#09f" });

    customOverlay.setContent('<div class="area">' + area.name + "</div>");

    customOverlay.setPosition(mouseEvent.latLng);
    customOverlay.setMap(map);
  });

  // 다각형에 mousemove 이벤트를 등록하고 이벤트가 발생하면 커스텀 오버레이의 위치를 변경합니다
  kakao.maps.event.addListener(polygon, "mousemove", function (mouseEvent) {
    customOverlay.setPosition(mouseEvent.latLng);
  });

  // 다각형에 mouseout 이벤트를 등록하고 이벤트가 발생하면 폴리곤의 채움색을 원래색으로 변경합니다
  // 커스텀 오버레이를 지도에서 제거합니다
  kakao.maps.event.addListener(polygon, "mouseout", function () {
    polygon.setOptions({ fillColor: "#fff" });
    customOverlay.setMap(null);
  });

  // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다
  kakao.maps.event.addListener(polygon, "click", function (mouseEvent) {
    console.log(area.id);
    console.log(locals);
    if (Object.keys(locals).length > 0) {
      location.href = locals[area.id][1];
    }
    var content =
      '<div class="info">' +
      '   <div class="title">' +
      area.name +
      "</div>" +
      '   <div class="size">총 면적 : 약 ' +
      Math.floor(polygon.getArea()) +
      " m<sup>2</sup></div>" +
      "</div>";

    infowindow.setContent(content);
    infowindow.setPosition(mouseEvent.latLng);
    infowindow.setMap(map);
  });
}
