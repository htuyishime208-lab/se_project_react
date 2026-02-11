const coordinates={lat:"33.6194", lon:"-111.9556"};
const apiKey="8726f0e1ddd809c91b0798189abb64a7";

const weatherConditionImages=
{
    day:{
        clear:{
            name: "clear",
            image: new URL("../assets/day/ClearDay.svg", import.meta.url).href,
        },
        clouds:{
            name: "clouds",
            image: new URL("../assets/day/CloudDay.svg", import.meta.url).href,
        },
        fog:{
            name: "fog",
            image: new URL("../assets/day/FogDay.svg", import.meta.url).href,
        },
        snow:{
            name: "snow",
            image: new URL("../assets/day/SnowDay.svg", import.meta.url).href,
        },
        storm:{
            name: "storm",
            image: new URL("../assets/day/StormDay.svg", import.meta.url).href,
        }

    },
    night:{
         clear:{
            name: "clear",
            image: new URL("../assets/night/ClearNight.svg", import.meta.url).href,
         },
        clouds:{
            name: "clouds",
            image: new URL("../assets/night/CloudDay.svg", import.meta.url).href,
        },
        fog:{
            name: "fog",
            image: new URL("../assets/night/FogDay.svg", import.meta.url).href,
        },
        snow:{
            name: "snow",
            image: new URL("../assets/night/SnowNight.svg", import.meta.url).href,
        },
        storm:{name: "storm",
            image: new URL("../assets/night/StormNight.svg", import.meta.url).href,
        }}

    };


export {coordinates,apiKey,weatherConditionImages};