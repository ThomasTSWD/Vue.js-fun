import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Lenis from '@studio-freight/lenis'



const app = createApp(App)

app.use(router)

app.mount('#app')

/** LENIS */

const lenis = new Lenis()

lenis.on('scroll', (e) => {
	console.log(e)
})

function raf(time) {
	lenis.raf(time)
	requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



/***** LOL *****/

navigator.getBattery().then(function (battery) {
	const infosBatterie = {
		niveau: battery.level * 100, // En pourcentage
		chargeEnCours: battery.charging,
		tempsRestant: battery.dischargingTime, // En secondes
	};

	console.log(infosBatterie);
});
const infosEquipement = {
	appName: navigator.appName,
	appVersion: navigator.appVersion,
	platform: navigator.platform,
	userAgent: navigator.userAgent,
	screenWidth: window.screen.width,
	screenHeight: window.screen.height,
	colorDepth: window.screen.colorDepth,
	cookiesEnabled: navigator.cookieEnabled,
	language: navigator.language,
	javaEnabled: navigator.javaEnabled(),
	orientation: window.screen.orientation.type,
	mouvement: "DeviceMotionEvent" in window,
	orientationMouvement: "DeviceOrientationEvent" in window,
	performances: window.performance
		? window.performance.toJSON()
		: "Non supporté",
	gestionnaireTâches: navigator.scheduling
		? navigator.scheduling.isInputPending()
		: "Non supporté",
};

console.log(infosEquipement);