<h1 align="center">
   NextCloud - Basic Cloud Solution
</h1>

<p align="center"> 
  <img src="https://github.com/user-attachments/assets/61de4a2b-8a9c-429e-935c-e7cd418b2185" alt="cloudnext" width="400"/>
</p>


<div align="center">
  <img src="https://img.shields.io/badge/Next.js-20232a?style=for-the-badge&logo=next.js&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Convex-1a2734?style=for-the-badge&logo=convex&logoColor=80c0ff" />
  <img src="https://img.shields.io/badge/Clerk-223355?style=for-the-badge&logo=clerk&logoColor=ffffff" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2d3b55?style=for-the-badge&logo=githubactions&logoColor=2088FF" />
  <img src="https://img.shields.io/badge/TailwindCSS-233f5e?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" />
  <img src="https://img.shields.io/badge/TypeScript-2c3e50?style=for-the-badge&logo=typescript&logoColor=3178C6" />
  <img src="https://img.shields.io/badge/Vercel-111827?style=for-the-badge&logo=vercel&logoColor=ffffff" />
</div>

---

**CloudNext** is a simple and user-friendly cloud storage platform designed for managing files like documents, CSVs, and images with ease. It allows users to upload, download, favorite, and schedule files for deletion, while offering seamless authentication and backend integration through Clerk and Convex.

## Table of Contents

- [Features](#features)
- [Application](#application)
- [Tools Used](#tools-used)
- [Areas for Improvement](#areas-for-improvement)

## Features

- **File Upload & Storage**: Users can upload documents, CSVs, and images into a personal or organizational cloud space. Files are stored in **AWS S3** with metadata and indexing managed by **Convex** for realtime queries.

- **File Download & Management**: Files can be downloaded, marked as favorites for quick access, or flagged for scheduled deletion. All state changes sync instantly via Convex’s realtime backend.

- **User Authentication & Organizations**: Authentication is powered by **Clerk** with Google OAuth support. Users can create or join **Clerk Organizations**, enabling group workspaces where members collaborate. Within organizations, roles define who can invite or manage members.

- **Metrics & Deployment**: Basic usage metrics (uploads, downloads, activity) are tracked and surfaced in the app, leveraging **Vercel**’s built-in observability. The app is continuously deployed on Vercel via **GitHub Actions**.

- **Tech Stack & Infrastructure**  
  - **Frontend:** Next.js, React, TailwindCSS, TypeScript  
  - **Backend:** Convex (realtime data + functions)  
  - **Storage:** AWS S3 (via Convex integration)  
  - **Auth & Orgs:** Clerk (Google sign-in, org roles & membership, webhooks → Convex)  
  - **Deployment:** Vercel  
  - **CI/CD:** GitHub Actions
 
## Application

https://github.com/user-attachments/assets/5e3b41b5-888c-460c-84b6-57fbc60eb5ca

A more extensive showcase is available in [my portfolio](https://vladimircuriel.com/posts/9_cloudnext/)!
 
## Tools Used

- ![Next.js](https://img.shields.io/badge/NextJS-000000?logo=next.js&logoColor=white&style=flat-square) **Next.js**: Framework for building the frontend UI and handling routes, providing a performant React-based application.

- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square) **React**: Core library powering interactive components for browsing, searching, and managing files in the dashboard.

- ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) **Tailwind CSS**: Utility-first CSS framework used to build a clean and responsive interface for file management.

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square) **TypeScript**: Adds static typing to the codebase, ensuring type-safe queries, props, and API calls to Convex.

- ![Convex](https://img.shields.io/badge/Convex-1A2734?logo=convex&logoColor=white&style=flat-square) **Convex**: Realtime backend used to store file metadata, handle queries, and integrate with AWS S3 for file storage.

- ![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?logo=amazons3&logoColor=white&style=flat-square) **AWS S3**: Storage layer where user files (documents, CSVs, images) are securely uploaded, downloaded, and served.

- ![Clerk](https://img.shields.io/badge/Clerk-3B82F6?logo=clerk&logoColor=white&style=flat-square) **Clerk**: Authentication and user management, enabling Google sign-in and supporting organizations with role-based access.

- ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=flat-square) **Vercel**: Hosting and deployment platform providing serverless scaling, built-in monitoring, and fast global CDN.

- ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white&style=flat-square) **GitHub Actions**: CI/CD pipelines automating test, build, and deployment to Vercel on every push to main.


## Areas for Improvement

- Files cannot be renamed after upload; users only see the original filename.  
- There is no folder or tagging system—files are listed in a flat structure, which can become hard to manage at scale.  
- While organizations support role-based permissions, only admins can delete files; finer-grained roles (e.g., read-only, upload-only) are not yet available.  
- Deleted files go into a 30-day pending deletion area, but recovery is only possible within that window; after that, they are permanently lost.  
- Any user with the direct file URL can access the file, meaning stricter access controls or link expiration features could improve privacy.  
- Files are stored in S3 without encryption at rest, leaving content visible in plain form at the storage level.  
- There is no versioning system, so updating a file requires uploading a new copy.  
- Users cannot view their activity history (uploads, downloads, deletions), and organizations lack analytics dashboards to monitor usage.  
