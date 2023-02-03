<script setup>
import Tooltip from '../components/Tooltip.vue';

defineProps({
	crew: {
		type: Array,
		required: true
	}
})
</script>

<template>
  <div class="BoatScene scene">
    <!-- Made by sarah frisk https://codepen.io/sfrisk/pen/pwWwYZ -->
    <div class="waves-back">
      <div class="wave-back"></div>
      <div class="wave-back"></div>
      <div class="wave-back"></div>
      <div class="wave-back"></div>
      <div class="wave-back"></div>
    </div>
      
    <div class="boat">
      <span></span>
			<div class="crew">
				<div
					v-for="member in crew"
					:key="member.id"
					class="avatar"
				>
					<Tooltip>
						<template #tooltip>
							{{ member.name }}
							<div class="member-role">({{ member.role }})</div>
						</template>
						<img :src="member.mediaUrl" />
					</Tooltip>
				</div>
			</div>
				
      <div class="mast">
        <div class="sail"></div>
        <div class="flag">
          <div class="skull">
            <div class="eyes">
              <div class="eye"></div>
              <div class="eye"></div>
            </div>
            <div class="teeth">
              <div class="tooth"></div>
              <div class="tooth"></div>
              <div class="tooth"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="hull"></div>
    </div>

    <div class="waves">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped>

.BoatScene {
  --var-txt-color: #c1d32f;
  --waveSpeed: 10;
  --boatWidth: 14rem;
  --waveFront: #0cabaa;
  --waveBack: #108291;
  --sky1: #a5e1dd;
  --sky2: #d3ede2;
  --hull: #473322;
  --mast: #674333;
  --sail: #f2edea;
  --flag: #ff90aa;
}

.BoatScene {
  background: var(--sky1);
  background: linear-gradient(to bottom, var(--sky1) 0%, var(--sky2) 100%);
}

.crew {
  display: flex;
  margin-bottom: -0.4rem;
}

.avatar {
  width: 2rem;
  height: 2rem;
  background: white;
  border: 1px solid black;
  border-radius: 50%;
  margin-left: -0.4rem;
}

.avatar:first-child {
  margin-left: 0;
}

.member-role {
	color: #cebfb5;
	font-size: 0.7rem;
} 

.boat {
	position: fixed;
	bottom: 20%;
	left: 50%;
	margin-left: -7rem;
	animation: boat 1.25s linear alternate infinite;
	animation-delay: -.33s;
}

.hull {
	position: relative;
	height: 0em;
	width: var(--boatWidth);
	border-bottom: 5em solid var(--hull);
	background: var(--hull);
	border-radius: 0 0 28rem 28rem;
}

.hull::after {
	content: 'Sunny';
	display: block;
	color: var(--sail);
	padding-left: 1em;
	padding-top: 1em;
	font-size: 10px;
	opacity: .5;
	font-family: 'Open Sans', sans-serif;
	letter-spacing: 1px;
}

.mast {
	position: absolute;
	bottom: 0;
	left: 50%;
	margin-left: -.25em;
	background: var(--mast);
	width: .5em;
	height: 15em;
	z-index: -1;
}

.sail {
	top: 2em;
	margin-left: .5em;
	width: 0;
	height: 0;
	border-bottom: 7em solid var(--sail);
	border-right: 4em solid transparent;
	position: absolute;
}

.sail::after {
	margin-left: .75em;
	width: 0;
	height: 0;
	border-bottom: 6em solid var(--sail);
	border-left: 4em solid transparent;
	content: '';
	display: block;
	position: absolute;
	left: -5.25em;
	top: 1.1em;
}

.flag {
	position: absolute;
	width: 3em;
	height: 2em;
	background: var(--flag);
	top: 0;
	right: .5em;
}


.skull {
	height: 20px;
	width: 20px;
	background: #fff;
	border-radius: 100%;
	position: absolute;
	left: 50%;
	margin-left: -10px;
	top: 13%;
}

.skull::before{
	content: '';
	display: block;
	position: absolute;
	bottom: 1px;
	background: white;
	width: 24px;
	height: 10px;
	left: 50%;
	margin-left: -12px;
	border-radius: 100%;
}

.eye {
	position: absolute;
	background: var(--flag);
	height: 8px;
	width: 4px;
	border-radius: 100%;
	top: 5px;
	z-index: 100;
}

.eye:first-child {
	right: 50%;
	margin-right: 2px;
}

.eye:last-child {
	left: 50%;
	margin-left: 2px;
}

.teeth {
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: -2px;
	width: 100%;
	right: -1px;
}

.tooth {
	background: #fff;
	height: 6px;
	width:  3px;
	margin: 0 1px 0 0;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

}

.waves {
	height: 33.3%;
	width: 100%;
	position: fixed;
	bottom: 0;
}

.waves-back {
	height: 36%;
	width: 100%;
	position: fixed;
	bottom: 0;
}

.wave-back {
	position: absolute;
	bottom: 0;
	width: 85%;
	height: 100%;
	background: var(--waveBack);
	border-radius: 100% 100% 0 0;
	animation: wave 13.5s linear infinite;
}


.wave {
	position: absolute;
	bottom: 0;
	width: 85%;
	height: 100%;
	background: var(--waveFront);
	border-radius: 100%  100% 0 0;
	animation: wave 10s linear infinite;
}

.wave:nth-child(1),
.wave-back:nth-child(1){
	animation-delay: 0s;
}

.wave:nth-child(2),
.wave-back:nth-child(2){
	animation-delay: -2.5s;
}

.wave:nth-child(3),
.wave-back:nth-child(3){
	animation-delay: -5s;
}

.wave:nth-child(4),
.wave-back:nth-child(4){
	animation-delay: -7.5s;
}
.wave:nth-child(5),
.wave-back:nth-child(5){
	animation-delay: -10s;
}

@keyframes wave {
	0% {
		left: 155%;
  }
	100% {
		left: -155%;
  }
}

@keyframes boat {
	0% {
		bottom: 30%;
  }
	100% {
		bottom: 24%;

  }
}
</style>