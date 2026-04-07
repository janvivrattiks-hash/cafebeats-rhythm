import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DownloadMenu() {
    const { slug } = useParams();

    useEffect(() => {
        window.location.href = `/menu/${slug}.pdf`;
    }, [slug]);

    return null;
}