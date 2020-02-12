import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ACCESSTOKENMAPBOX } from 'src/app/config/env.conf';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as qrious from 'qrious';
@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.page.html',
  styleUrls: ['./invitacion.page.scss'],
})
export class InvitacionPage implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  marker: mapboxgl.Marker;
  buttonDesactivado = true;
  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    const qr = new qrious({
      element: document.getElementById('qr'),
      value: 'https://github.com/neocotic/qrious',
      mime: '/assets/img/1.png',
      size: 250
    });
  }
  ionViewWillEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      console.log(resp.coords.latitude);
      // resp.coords.longitude
      console.log(resp.coords.longitude);
      this.map = new mapboxgl.Map({
        container: 'mapContainer',
        style: 'mapbox://styles/mapbox/light-v10?optimize=true',
        accessToken: ACCESSTOKENMAPBOX,
        // longitud / latitud
        center: [resp.coords.longitude, resp.coords.latitude], // starting position
        zoom: 18 // starting zoom
      });
      this.map.on('load', () => {
        this.map.resize();
        this.buttonDesactivado = false;
      });
      this.map.on('move', (e) => {
        const {lng, lat} = this.map.getCenter();
        console.log(`lng ${lng}`, `lat ${lat}`);
      });
      this.map.addControl(new mapboxgl.NavigationControl());
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  ngAfterViewInit(): void {
  }

}
