import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJyvSozT_erFICsQ8pO3bCcqO1H9SnkwrZUDUVk42w=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="the Hacksmith"
        verified
        subs="10M"
        noOfVideos={653}
        description="We take fictional ideas from movies, video games & comics, and make real working prototypes!

        I quit my full-time job as an engineer and product developer to make only the coolest inventions -- just for you guys -- right here on YouTube. "
      />
      <hr />
      <VideoRow
        views="10M"
        subs="10M"
        description="Download and play AFK Arena for free ▻ https://bit.ly/3cvZ7dB Use these bonus codes: BestRPG4BusyU and uf4shqjngq to get ..."
        timestamp="3 Days Ago"
        channel="the Hacksmith"
        title="4000° PLASMA LIGHTSABER BUILD (RETRACTABLE BLADE!)"
        image="https://img.youtube.com/vi/xC6J4T_hUKg/maxresdefault.jpg"
      />
      <VideoRow
        views="2.7M"
        subs="10M"
        description="Check out http://KiwiCo.com/hacksmith50 for 50% off your first monthly crate. 
        Build your own DIY Surfboard with parts from ► http://www.MHZ-Watercraft.com
        See the full circuit diagram on Maker.io ► https://www.digikey.com/en/maker/proj..."
        timestamp="1 Week Ago"
        channel="the Hacksmith"
        title="DIY Silver Surfer Surfboard goes SUPER FAST!"
        image="https://img.youtube.com/vi/N9LSXC0B61s/maxresdefault.jpg"
      />
      <VideoRow
        views="5.8M"
        subs="10M"
        description="Get Honey for FREE and start saving money today ► http://joinhoney.com/hacksmith
        Thanks Honey for sponsoring this video! "
        timestamp="2 Weeks Ago"
        channel="the Hacksmith"
        title="REAL IRON MAN REPULSOR + GIVEAWAY!"
        image="https://img.youtube.com/vi/3NRriVUjErM/maxresdefault.jpg"
      />
      <VideoRow
        views="7.2M"
        subs="10M"
        description="Learn more about Focals ►  https://www.bynorth.com (ad) 
        Enter the Giveaway ► The contest is now closed. 
        Follow North on Instagram ► https://www.instagram.com/focalsbynorth/ "
        timestamp="1 Year Ago"
        channel="the Hacksmith"
        title="E.D.I.T.H. Smart Glasses in REAL LIFE! (WIN A PAIR!)"
        image="https://img.youtube.com/vi/RTlmhOCU5sQ/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
