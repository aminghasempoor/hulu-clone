import Head from "next/head";

const TitlePage = ({text}) => {
    return (
        <Head>
            <title>
                {text}
            </title>
        </Head>
    );
};

export default TitlePage;
