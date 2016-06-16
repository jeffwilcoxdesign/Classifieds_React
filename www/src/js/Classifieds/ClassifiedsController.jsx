/*
NYTimes Classifieds Component by Jeff Wilcox 2.29.2016
*/
require('../../css/Classifieds/index.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { classifieds } from './Classifieds.jsx';

const classifiedsData = {
  mainContent: {
    realestate: {
      catagory: 'real estate',
      linksHeading: 'find properties',
      linksList: [
      {
          title: 'Go to Real Estate Section',
          url: 'http://www.nytimes.com/pages/realestate/'
      }, {
          title: 'Search for Properties',
          url: 'http://www.nytimes.com/real-estate/find-a-home'
      }, {
          title: 'Download the Real Estate App',
          url: 'http://itunes.apple.com/us/app/nytimesrealestate/id337316535'
      }, {
          title: 'Commercial Real Estate',
          url: 'http://www.nytimes.com/pages/realestate/commercial/'
      }, {
          title: 'Video Showcase: Real Estate',
          url: 'http://www.nytimes.com/video/real-estate'
      }, {
          title: 'Post an Ad',
          url: 'http://www.cityfeet.com/Advertise/Default.aspx?PartnerPath=nytimes/'
      }],
      featuredHeading: 'international real estate',
      featuredArticle: {
          title: 'Experimental Living Inside a Dutch Greenhouse',
          content: 'The Concept House in Rotterdam, an energy-efficient wooden dwelling encased in a greenhouse, has made firm converts of its test family.',
          url: 'http://www.nytimes.com/2016/02/26/realestate/experimental-living-inside-a-dutch-greenhouse.html',
          slideshow: 'http://www.nytimes.com/slideshow/2016/02/23/blogs/predator-or-prey-shark-fishing-in-baja-mexico/s/20160223-lens-sharks-slide-FKUV.html',
          image: 'images/greenhouse.jpg',
      },
      advertisement: {
          image: 'images/ad_sothebys.png',
          url: 'http://www.nytimes.com/subscriptions/Multiproduct/lp3HY66.html?campaignId=4YH6F&pos=300x79',
      }
    },
    autos: {
      catagory: 'autos',
      linksHeading: 'find a vehicle',
      linksList: [{
          title: 'Go to Automobiles Section',
          url: 'http://www.nytimes.com/autos'
      }, {
          title: 'Search for New Cars',
          url: 'http://www.nytimes.com/pages/automobiles/reviews/'
      }, {
          title: 'Download the Real Estate App',
          url: 'http://itunes.apple.com/us/app/nytimesrealestate/id337316535'
      }, {
          title: 'Collectible Cars',
          url: 'http://www.nytimes.com/pages/automobiles/collectiblecars/'
      }, {
          title: 'Video Showcase: Automobiles',
          url: 'http://www.nytimes.com/video/automobiles'
      }, {
          title: 'Sell Your Car',
          url: 'https://placead.nytimes.com/default.asp?CategoryID=NYTCAR'
      }],
      featuredHeading: 'wheels',
      featuredArticle: {
          title: 'Technology Problems Top a List of Car Complaints',
          content: 'The results of J.D. Power’s latest survey on vehicle dependability suggest there is a long way to go before self-driving cars become practical.',
          url: 'http://www.nytimes.com/2016/02/26/automobiles/wheels/technology-problems-top-a-list-of-car-complaints.html',
          slideshow: 'http://www.nytimes.com/slideshow/2016/02/24/blogs/finding-oscar-moments-from-the-red-carpet-to-backstage/s/20160224-lens-oscars-slide-2UOK.html',
          image: 'images/26wheels.jpg',
      },
      advertisement: {
          image: 'images/ad_bonobos.png',
          url: 'https://bonobos.com?campaignId=4YH6F&pos=300x79',
      }
    },
    jobs: {
      catagory: 'jobs',
      linksHeading: 'find a new job',
      linksList: [{
          title: 'Go to Jobs Section',
          url: 'http://www.nytimes.com/section/jobs'
      }, {
          title: 'Search for Jobs',
          url: 'http://jobs.nytimes.com/register/step1'
      }, {
          title: 'Employer Job Posting',
          url: 'https://jobs.nytimes.com/AdminNet/Employer/Marketing/3046?action=click&contentCollection=jobs&region=navbar&module=collectionsnav&pagetype=sectionfront&pgtype=sectionfront'
      }, {
          title: 'View All Packages',
          url: 'https://jobs.nytimes.com/AdminNet/Employer/AllProducts/3046'
      }, {
          title: 'Employer Login',
          url: 'https://jobs.nytimes.com/adminnet/login.aspx'
      }, {
          title: 'Job Seeker Login',
          url: 'https://jobs.nytimes.com/login'
      }],
      featuredHeading: 'corner office',
      featuredArticle: {
          title: 'Lorna Borenstein of Grokker: Invest in People for the Long Term',
          content: 'Ms. Borenstein, founder and chief executive of Grokker, says it’s important to build a sustaining relationship with employees and to help them cultivate their ambitions.',
          url: 'http://www.nytimes.com/2016/02/21/business/lorna-borenstein-of-grokker-invest-in-people-for-the-long-term.html?rref=collection%2Fsectioncollection%2Fjobs',
          slideshow: 'http://www.nytimes.com/slideshow/2016/02/22/blogs/photographing-hip-hops-golden-era/s/20160222-lens-bill-slide-L6Q3.html',
          image: 'images/21corner.jpg',
      },
      advertisement: {
          image: 'images/ad_airchina.png',
          url: 'https://www.airchina.us/?campaignId=4YH6F&pos=300x79',
      }
  },
  all: {
      catagory: 'all classifieds',
      sections: [{
          title: 'Business Opportunities',
          desc: 'Be your own boss. Find business opportunities and franchise offerings.',
          url: 'http://listings.nytimes.com/businessopportunities/'
      }, {
          title: 'Camps & Schools',
          desc: 'Compare camps and schools to find the right fit for your child.',
          url: 'http://listings.nytimes.com/campsandschools/'
      }, {
          title: 'Home & Garden Directory',
          desc: 'Improve your world.  Find home & garden professionals near you today.',
          url: 'http://listings.nytimes.com/HomeandGarden/'
      }, {
          title: 'Personals',
          desc: 'Meet your match. Post your profile and make a connection now.',
          url: 'http://www.nytimes.com/ads/personals/index.html'
      }, {
          title: 'Residential Real Estate',
          desc: 'Find your dream home in New York, New Jersey, Connecticut, Florida and beyond.',
          url: 'http://www.nytimes.com/pages/realestate/index.html'
      }, {
          title: 'Social Announcements',
          desc: 'See the latest paid wedding, anniversary, engagement and commitment announcements.',
          url: 'http://www.legacy.com/nytimes/celebrations.asp?Page=SearchResults'
      }, {
          title: 'Small Inns & Lodges',
          desc: 'Discover the best places to stay in the U.S. and around the world.',
          url: 'http://listings.nytimes.com/SmallInnsAndLodges/'
      }, {
          title: 'Professional Services',
          desc: 'Browse listings of experts and professionals to get you the help you need.',
          url: 'http://listings.nytimes.com/ProfessionalServices/'
      }],
    },
  },
  defaultTab: 'realestate',
  placeAd: {
    title: 'Place a Classified Ad »',
    url: 'https://placead.nytimes.com/default.asp',
  }
};
const Classifieds = classifieds({ React }, { ReactDOM });

ReactDOM.render(
	<Classifieds {...classifiedsData} />,
	document.getElementById('React-Classifieds')
);
