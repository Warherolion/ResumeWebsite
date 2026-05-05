export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NODE_ENV === "production" ? "/ResumeWebsite" : "";
  return `${basePath}${src}`;
}
