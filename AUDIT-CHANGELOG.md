# Audit-fix revision

Changes in this revision:

- Review-theme summaries are now hidden until individually verified.
- The homepage review teaser is suppressed when there are no verified review themes or verified rating figures.
- LocalBusiness JSON-LD omits phone and address until `businessContactDetailsVerified` is confirmed by the business.
- Portfolio intro copy now identifies the page as a preview while demo projects remain.
- The enquiry form keeps its duplicate-submit guard active until the visitor starts a new enquiry.
- Added `PHOTO-ASSET-CLEARANCE.md` with the photo permission requirements and the reviewed source links.
- Added a Google Maps location embed to the Contact page and direct links to the public listing photos from Contact and Portfolio. The photos remain on Google Maps; they are not copied or republished in the website gallery.
- README updated with pre-launch verification requirements.

Not completed:

- Real Meena Events photographs have not been installed. Google Maps listing photos may be third-party/customer uploads, and the Meena Events Flickr photos reviewed are marked All rights reserved. Obtain written approval and original/high-resolution files before publishing them.
- Production build, TypeScript check, and browser/device QA have not been completed because dependencies are not installed in this environment. The previous dependency installation attempts timed out.
