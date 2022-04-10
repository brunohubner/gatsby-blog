import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as S from "../components/About/styles"

export default function AboutPage() {
    return (
        <Layout>
            <SEO title="Sobre" />
            <S.AboutWrapper>
                <h1>Página Sobre</h1>
                <br />
                <p>
                    Por enquanto esta página ainda não foi desenvolvida, mas já
                    estamos trabalhando nela.
                </p>
            </S.AboutWrapper>
        </Layout>
    )
}
