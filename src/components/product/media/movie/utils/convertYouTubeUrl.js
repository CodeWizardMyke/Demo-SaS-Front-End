export default function convertYouTubeUrl(url = "") {

    if (!url || typeof url !== "string") {
        return "";
    }

    try {

        const parsed = new URL(url);

        if (
            parsed.hostname.includes("youtube.com")
        ) {

            const videoId =
                parsed.searchParams.get("v");

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }

        }

        if (
            parsed.hostname.includes("youtu.be")
        ) {

            const videoId =
                parsed.pathname.replace("/", "");

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }

        }

        return url;

    } catch {

        return "";

    }

}