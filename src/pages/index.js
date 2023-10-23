import React from "react";
import  HeaderMenu  from "@/components/header";
import { Flex } from "@mantine/core";
import Footer from "@/components/footer";
import Content from "@/components/content";

export default function Home() {
  return (
    <>
    <h1>Hello World!</h1>
      {/* <Flex 
        direction={"column"}
        gap={10}
      >
        <Flex direction={"column"}>
          <HeaderMenu />
        </Flex>
        <Content />
        <Footer />
      </Flex> */}
    </>
  );
}
