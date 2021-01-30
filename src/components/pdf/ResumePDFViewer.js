import React from "react"
import { Document } from "react-pdf"

export default function ResumePDFViewer(props) {
    const { pdf } = props 

    return (
        <>
            <Document
                file={pdf}
                >
                    download
                </Document>
        </>
    )
}