import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

// Components
import { BackgroundImage1,  BackgroundImage2,FooterCon,FooterLink,GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Clouds1 from '@/assets/cloud-and-tunder.png'
import Clouds2 from '@/assets/cloudy-weather.png'

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0)
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1 src={Clouds1}
          height={200}
          alt='cloudy background1'
        />

        {/* Quote Generator Modal pop-up */}
        {/* <QuoteGeneratorModal /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>Daily Inspirational Generator</QuoteGeneratorTitle>
            
            <QuoteGeneratorSubtitile>
              Looking for a splash of inspiration? Generator a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target='_blank' rel='noopener noreferrer'>ZenQuotes API</FooterLink>
            </QuoteGeneratorSubtitile>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>Make a quote</GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images*/}
        <BackgroundImage2 src={Clouds2}
          height={200}
          alt='cloudy background2'
        />

        {/* Footer */}
        <FooterCon>
          <>
          Quotes Generated: {numberOfQuotes}
          <br/>
          Developed with ❤️ by <FooterLink href="https://github.com/Mujeeb4582" target='_blank' rel='noopener noreferrer'>@Mujeeb-ur-Rahman</FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  )
}
