export function renderPreview(field, dataForm) {
    const value = dataForm?.[field.name];

    if (value == null || value === "") {
        return "—";
    }


 // JSON salvo como string
    if (typeof value === "string") {

        try {

            const obj = JSON.parse(value);

            if (typeof obj === "object" && obj !== null) {
                return (
                    <div className="preview-object">
                        {Object.entries(obj).map(([key, val]) => (
                            <div
                                key={key}
                                className="preview-object-item"
                            >
                                <strong>{key}</strong>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                );
            }

        } catch {}

    }


    // Selects
    if (typeof value === "object" && !Array.isArray(value)) {

        // procura *_name
        const selectName = Object.entries(value)
            .find(([key]) => key.endsWith("_name"));

        if (selectName) {
            return selectName[1];
        }

        // JSON comum
        return (
            <div className="preview-object">
                {Object.entries(value).map(([key, val]) => (
                    <div key={key} className="preview-object-item">
                        <strong>{key}</strong>
                        <span>{String(val)}</span>
                    </div>
                ))}
            </div>
        );
    }

    switch (field.type) {

        case "information":
            console.log(field)
            return;


        case "image-upload":
            return `${value.length} imagens`;

        case "video-upload":
            return value ? "Vídeo adicionado" : "Sem vídeo";

        case "checkbox":
            return value ? "Sim" : "Não";

        case "textarea": {

            // remove html
            const text = value.replace(/<[^>]+>/g, "");

            return text.length > 120
                ? text.slice(0,120) + "..."
                : text;
        }

        default:

            return String(value);
    }
}