var map = new BMap.Map("toiletmap");

var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);

// 定位
// autoLocate();

map.enableScrollWheelZoom(true);

map.addControl(new BMap.NavigationControl());

map.addControl(new BMap.ScaleControl({
  anchor: BMAP_ANCHOR_TOP_RIGHT,
  offset: new BMap.Size(10, 10)
}));

var geolocationControl = new BMap.GeolocationControl({
  showAddressBar: false,
  enableAutoLocation: true,
});

geolocationControl.location();

geolocationControl.addEventListener('locationSuccess', (r) => {
  if (r.type == 'locationSuccess') {
    this.locateSuccess.call(this.map, r.point);
  }
});

map.addControl(geolocationControl);

function locateSuccess(point) {
  if (this.cur_position) {
    this.removeOverlay(this.cur_position);
  }
  this.cur_position = new BMap.Marker(point);
  this.addOverlay(this.cur_position);
  this.panTo(point);
  POISearch(point);
}

function autoLocate() {
  const geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition((r) => {
    if(geolocation.getStatus() == BMAP_STATUS_SUCCESS){
      this.locateSuccess.call(this.map, r.point);
    }
  });
}

  // POI 检索
function POISearch(point) {
  var local = new BMap.LocalSearch(this.map, {      
    renderOptions: { map: map, autoViewport: true },
    pageCapacity: 10,
    onSearchComplete: (results) => {
      console.log(results.Ar);
    }
  });      
  local.searchNearby("厕所", point, 2000);
}