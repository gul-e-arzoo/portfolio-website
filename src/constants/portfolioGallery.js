/** Public folder paths → tab gallery (What I've Made) */

const FOLDERS = {
  linkedInBranding: "Linkedin_content",
  contentCreation: "Content_sheets_content",
  webDesigns: "Web_design_content",
};

function galleryPath(folder, filename) {
  return `/${folder}/${encodeURIComponent(filename)}`;
}

/** Native pixel size — keeps grid rows even when widths differ */
const IMAGE_DIMENSIONS = {
  "banner-01.png": { width: 770, height: 267 },
  "banner-02.png": { width: 770, height: 267 },
  "banner-03.png": { width: 770, height: 267 },
  "banner-04.png": { width: 770, height: 267 },
  "banner-05.png": { width: 770, height: 267 },
  "banner-06.png": { width: 770, height: 267 },
  "profile-01.jpg": { width: 765, height: 692 },
  "profile-02.jpg": { width: 765, height: 692 },
  "profile-03.jpg": { width: 765, height: 692 },
  "profile-04.jpg": { width: 765, height: 692 },
  "profile-05.jpg": { width: 765, height: 692 },
  "profile-06.jpg": { width: 765, height: 692 },
  "Group 1410103926.png": { width: 458, height: 178 },
  "Group 1410103926-1.png": { width: 513, height: 178 },
  "Group 1410103926-2.png": { width: 438, height: 178 },
  "Group 1410103926-3.png": { width: 458, height: 178 },
  "Group 1410103926-4.png": { width: 513, height: 178 },
  "Group 2085663454.png": { width: 438, height: 167 },
  "Rectangle 40256.png": { width: 450, height: 452 },
  "Rectangle 40257.png": { width: 500, height: 452 },
  "Rectangle 40258.png": { width: 450, height: 452 },
  "Rectangle 40259.png": { width: 450, height: 452 },
  "Rectangle 40260.png": { width: 500, height: 452 },
  "Rectangle 40261.png": { width: 450, height: 452 },
};

function dimensionsForFile(folder, filename) {
  if (IMAGE_DIMENSIONS[filename]) return IMAGE_DIMENSIONS[filename];
  if (folder === FOLDERS.contentCreation) return { width: 520, height: 659 };
  if (folder === FOLDERS.webDesigns) return { width: 451, height: 452 };
  return { width: 500, height: 452 };
}

function mapGalleryItems(folder, files, idPrefix, altLabel) {
  return files.map((file, index) => {
    const { width, height } = dimensionsForFile(folder, file);
    return {
      id: `${idPrefix}-${index + 1}`,
      src: galleryPath(folder, file),
      alt: `${altLabel} ${index + 1}`,
      width,
      height,
    };
  });
}

/** Short banners first, then taller cards — avoids awkward grid gaps */
const linkedInBrandingFiles = [
  "banner-01.png",
  "banner-02.png",
  "banner-03.png",
  "banner-04.png",
  "banner-05.png",
  "banner-06.png",
  "profile-01.jpg",
  "profile-02.jpg",
  "profile-03.jpg",
  "profile-04.jpg",
  "profile-05.jpg",
  "profile-06.jpg",
];

const contentCreationFiles = [
  "Rectangle 40262.png",
  "Rectangle 40263.png",
  "Rectangle 40264.png",
  "Rectangle 40265.png",
  "Rectangle 40266.png",
  "Rectangle 40267.png",
  "Rectangle 40268.png",
  "Rectangle 40269.png",
  "Rectangle 40270.png",
  "Rectangle 40271.png",
  "Rectangle 40272.png",
  "Rectangle 40273.png",
  "Rectangle 40274.png",
  "Rectangle 40275.png",
  "Rectangle 40276.png",
  "Rectangle 40277.png",
];

const webDesignFiles = [
  "Rectangle 40262.png",
  "Rectangle 40286.png",
  "Rectangle 40287.png",
  "Rectangle 40288.png",
  "Rectangle 40289.png",
  "Rectangle 40290.png",
  "Rectangle 40291.png",
  "Rectangle 40292.png",
];

export const portfolioGalleryByFilter = {
  "LinkedIn Branding": mapGalleryItems(
    FOLDERS.linkedInBranding,
    linkedInBrandingFiles,
    "linkedin",
    "LinkedIn branding work",
  ),
  "Content Creation": mapGalleryItems(
    FOLDERS.contentCreation,
    contentCreationFiles,
    "content",
    "Content creation work",
  ),
  "Web Designs": mapGalleryItems(
    FOLDERS.webDesigns,
    webDesignFiles,
    "web",
    "Web design work",
  ),
};
