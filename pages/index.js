import Head from 'next/head'
import {Grid,Image,Text,Card} from '@geist-ui/react'
import Product from '../components/product';
import { CartContext } from '../components/contextprovider';
export default function Home() {

  let pizzalist = [];
  for (let index = 0; index < 5;index++) {
    pizzalist.push(
    <Grid>
      <Product id={index}/>
    </Grid>)
  }
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Product/>
    </>
  )
}
