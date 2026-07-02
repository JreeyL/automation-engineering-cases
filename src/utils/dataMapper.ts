import atexData from '../data/ATEX.json';
import customData from '../data/custom-automation.json';
import mvVfdData from '../data/mv-vfd-applications.json';
import companiesData from '../data/companies.json';
import imagesData from '../data/images.json';
import videosData from '../data/videos.json';

export interface Company {
  id: string;
  companyName: string;
  website: string;
}

export interface ImageItem {
  path: string;
  description: string;
}

export interface VideoItem {
  equipment: string;
  url: string;
}

export interface Application {
  id: string;
  site: string;
  siteUrl?: string;
  unit: string;
  equipment: string;
  features: string[];
  technicalContributions?: string[];
  atexRating?: string;
  projectType?: string;
  images: ImageItem[];
  videoUrl?: string;
}

export interface CategoryData {
  category: string;
  categoryId: string;
  sharedSOP?: {
    title: string;
    steps: string[];
  };
  applications: Application[];
}

const companies: Company[] = companiesData as Company[];
const images: ImageItem[] = imagesData as ImageItem[];
const videos: VideoItem[] = videosData as VideoItem[];

// A helper to normalize strings for comparison
const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

const resolveCompanyUrl = (siteName: string) => {
  const normSite = normalize(siteName);
  const company = companies.find(c => normalize(c.companyName) === normSite);
  return company ? company.website : undefined;
};

// Heuristic to match images to an application
const matchImages = (app: any): ImageItem[] => {
  const normEquipment = normalize(app.equipment);
  const normUnit = normalize(app.unit);

  // Specific mappings for accuracy since folder names in images map closely to these
  return images.filter(img => {
    const normPath = normalize(img.path);

    // Check if the equipment or unit is in the path
    // Many paths use dashed versions of equipment like "Explosion-Proof-Local-Control-Panel"
    const wordsEquipment = app.equipment.toLowerCase().split(/[\s-()]+/);
    const wordsUnit = app.unit.toLowerCase().split(/[\s-()]+/);

    // Simple heuristic: if the path contains at least 3 significant words from equipment or unit
    const hasSignificantMatch = (words: string[], target: string) => {
      const sigWords = words.filter(w => w.length > 3);
      let matchCount = 0;
      sigWords.forEach(w => {
        if (target.includes(w)) matchCount++;
      });
      return matchCount >= Math.min(2, sigWords.length);
    };

    // Hardcode some folder mappings for absolute precision based on known structure:
    const specificMappings: Record<string, string> = {
      'app-01': 'explosionprooflocalcontrolpanel',
      'app-02': 'explosionproofpowerdistributionbox',
      'app-03': 'miningexplosionproofvfd',
      'app-04': 'lw760bdecantercentrifuge',
      'app-05': 'cnchydraulicpress',
      'app-06': 'aluminumextrusionlinepuller',
      'app-07': 'aluminummeltingfurnace',
      'app-08': 'animatronicmechaox',
      'app-09': 'circulatingwaterpump',
      'app-10': 'ethylenecompressor',
      'app-11': 'ballmill',
      'app-12': 'internalmixer',
      'app-13': 'sinteringfan'
    };

    const mappingKeyword = specificMappings[app.id as string];
    if (mappingKeyword && normPath.includes(mappingKeyword)) {
      return true;
    }

    return false;
  });
};

const mapCategory = (rawData: any): CategoryData => {
  return {
    category: rawData.category,
    categoryId: rawData.categoryId,
    sharedSOP: rawData.sharedSOP,
    applications: rawData.applications.map((app: any) => {
      const videoMatch = videos.find(v => app.unit.includes(v.equipment) || app.equipment.includes(v.equipment));
      return {
        ...app,
        siteUrl: resolveCompanyUrl(app.site),
        images: matchImages(app),
        videoUrl: videoMatch ? videoMatch.url : undefined
      };
    })
  };
};

export const getPortfolioData = (): CategoryData[] => {
  return [
    mapCategory(atexData),
    mapCategory(customData),
    mapCategory(mvVfdData)
  ];
};
