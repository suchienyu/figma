"use client";
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Pagination } from 'swiper/modules';
import './swiper-custom.css';
import 'swiper/css';
import { poppins } from './font'
import { roboto } from './font'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from '@chakra-ui/react'
import { Flex, Image, Box, Text, Button, AspectRatio, chakra, useDisclosure, FormControl, FormLabel, Input, Select, Textarea, useToast } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
SwiperCore.use([Pagination, Navigation]);

function Home() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex  //圖片和文字的距離
      direction="row"
      alignItems="center"
      width="100%"
      padding="14px 16px"
      justifyContent="space-between"
    >
      {/* Small screen */}
      {!isLargerThan768 ? (
        <>
          <Box>
            <Image
              src='https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png'
              alt='Dan Abramov'
              width="138px"
              height="51px"
            />
          </Box>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21"
                stroke="#313030"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </Box>
        </>
      ) : (
        // Large screen layout
        <Flex
          direction="row"
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          padding="0 40px"
        >
          <Box>
            <Image
              src='https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png'
              alt='Dan Abramov'
              width="138px"
              height="51px"
            />
          </Box>

          <Flex
            direction="row"
            alignItems="center"
            width="auto"
            ml="4"
            gap="32px"
          >
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#313030"
            >
              Find tutor
            </Text>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#313030"
            >
              Become a tutor
            </Text>
            <Select
              placeholder="English"
              maxWidth="105px"
            >
              <option value="en">English</option>
              <option value="es">繁體中文</option>
              <option value="fr">French</option>
              {/* Add more languages as needed */}
            </Select>
            <Button
              background="#7156E5"
              colorScheme="teal"
              variant="solid"
            >
              Log in
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

function Introduction() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1080] = useMediaQuery("(min-width: 1080px)");
  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");
  return (
    <Flex
      direction={isLargerThan768 ? "row" : "column"}
      padding="14px 16px"
      gap="16px"
      width="100%"
      height="640px"
      justifyContent="center"
      alignItems={isLargerThan768 ? "center" : "flex-start"}
      pl={isLargerThan1440 ? "76px" : "16px"}
    >
      <Flex
        direction="column"
        width={isLargerThan768 ? "auto" : "100%"}
      >
        <Box paddingBottom="10px">
          <Text  /*第一段文字*/
            color="#FDBA3E"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="26px" /* 144.444% */
          >
            Online Mandarin Learning
          </Text>
        </Box>

        <Box width={isLargerThan1440 ? "655px" : "auto"}>
          <Text  /*第二段文字*/
            color="var(--Grey-100, #313030)"
            //className={poppins.className}
            fontFamily={poppins.style.fontFamily}
            fontSize={isLargerThan768 ? "48px" : "24px"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight={isLargerThan768 ? "56px" : "33px"}
          >
            Learn Taiwan's Language: Traditional Chinese
          </Text>
        </Box>

        <Box width={isLargerThan1440 ? "567px" : "auto"}>
          <Text  /*第三段文字*/
            paddingTop="20px"
            color="var(--Grey-100, #313030)"
            fontFamily={roboto.style.fontFamily}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px" /* 150% */
          >
            1-on-1 online Mandarin classes: Immerse yourself in Mandarin and Taiwanese culture simultaneously and flexibly.
          </Text>
        </Box>

        <Box paddingTop="20px">
          <Button  /*get started按鈕*/

            display="flex"
            width="288px"
            height="40px"
            padding="8px 24px"
            justify-content="center"
            align-items="center"
            flex-shrink="0"
            border-radius="4px"
            background="#FDBA3E"
            textColor="white"
            _hover={{
              backgroundColor: "var(--Primary-300, #FE9000)", // 滑鼠懸停的背景色
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // 陰影
            }}
          >
            Get started
          </Button>
        </Box>
        {!isLargerThan768 && (
          <Box paddingTop="20px">
            <Image
              src='https://static-prod-baodao.s3.amazonaws.com/taipei101+.png'
              alt='Taipei 101'
              maxW="100%"
              flexShrink="0"
            />
          </Box>
        )}
      </Flex>

      {isLargerThan768 && (
        <Box marginLeft="16px">
          <Image
            src='https://static-prod-baodao.s3.amazonaws.com/taipei101+.png'
            alt='Taipei 101'
            maxW="100%"
            maxH="577px"
            flexShrink="0"
          />
        </Box>
      )}
    </Flex>

  );
}

function Video() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Flex
      direction={isLargerThan768 ? "row" : "column"}
      alignItems="center"
      padding={isLargerThan768 ? "14px 10vw" : "14px"}
      width="100%"
      height={isLargerThan768 ? "100%" : "auto"}
      position="relative"
      marginBottom={isLargerThan768 ? "6vh" : "4vh"}
      justifyContent="center"
    >
      {isLargerThan768 && (
        <>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translateX(-260%) translateY(70%) rotate(0deg)"
            // left="calc(100%+10px)"
            // transform="translateY(70%)"
            width="15vw"
            height="auto"
            fill="var(--Primary-300, #7156E5)"
            zIndex="2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="132" viewBox="0 0 42 142" fill="none">
              <path d="M21.6342 113.146C23.3491 110.71 22.5434 108.523 22.8147 106.46C22.9891 105.047 23.251 103.537 23.9039 102.343C25.3081 99.787 29.2304 99.9345 30.4162 102.512C30.9886 103.815 31.3911 105.278 31.5079 106.698C32.2208 115.625 32.8926 124.583 33.4519 133.56C33.5721 135.202 33.2367 136.959 32.7389 138.582C32.0047 141.055 29.0334 142.121 26.882 140.874C26.2767 140.525 25.6877 140.067 25.1343 139.615C19.7792 135.119 14.3776 130.689 9.11012 126.096C7.88205 125.025 6.7739 123.641 6.00877 122.16C4.53379 119.318 6.14147 116.867 9.40132 116.804C10.3159 116.794 11.2641 117.047 12.8001 117.278C12.4797 115.754 12.3448 114.7 11.9902 113.651C9.77334 106.97 7.5511 100.325 5.29315 93.6752C0.308637 78.8655 0.134666 63.6358 2.02026 48.3101C2.62412 43.5299 3.89248 38.7022 5.79104 34.3014C8.7561 27.4041 12.2711 20.7372 15.9789 14.247C20.1732 6.94429 26.8318 2.7063 34.8231 0.550852C36.1541 0.197626 37.7439 0.0678592 39.0386 0.447208C39.9815 0.73671 41.122 1.90468 41.3088 2.85534C41.4956 3.806 40.83 5.3295 40.0132 5.90772C38.7336 6.896 37.0434 7.45349 35.4907 8.06857C29.1924 10.6264 24.47 14.8606 21.368 20.9623C18.2034 27.2391 14.4942 33.2494 12.5616 40.0806C8.33807 55.1651 8.41023 70.3427 12.1513 85.4081C14.1777 93.61 17.2635 101.565 19.8936 109.637C20.2732 110.764 20.9297 111.749 21.6342 113.146Z" fill="#7156E5" />
            </svg>
          </Box>

          <Box
            position="relative"
            width="70vw"
            height="auto"
            flexShrink="0"
            //overflow="hidden"
            zIndex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          //flex="0 1 847px"
          >
            {/* 视频播放器 */}
            <Box
              as="video"
              src="https://s3-figma-videos-production-sig.figma.com/video/205500934632290305/TEAM/0903/ae6b/-c34c-4f8d-aa0b-a6540ddbaa08?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsiTVEHUHR0j6gnFB43rNl9YhraQpujedLjEj1553d364vvnoYwMGCGs1w5cjsAaoV4YRpj0ogljywlDgLDlAFmdEHmTsmdik7aKC7LrHmh8x3-6TCgkf6DvK4ODDqauqGguhoGRDYHs9-0fJ8x5jSovPVI4pEDpbbhqGGPL02aeRuums-6aWZn81HLk-LbE3snVtFmhDgntFAqALSZ4M3R18FRjYLLQ5icdZpcl3vxh4xPJ4uKaxlZAZCSXYJXj0w1x2Qrn7JtQXK9-ch4PDCNxxzi8qtiCtF5eqjyG1nQdN2IIasEHWj7dvj~7T5f3S6xSd2Tk4FZZvrRF-on3Lw__"
              controls
              autoPlay={isPlaying}
              maxW="100%"
              height="450px"
              display={isPlaying ? "block" : "none"}
              flexShrink="0"
            />
            {!isPlaying && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
                background="rgba(0, 0, 0, 0.5)"
                cursor="pointer"
                onClick={handlePlay}
                zIndex="2"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none">
                  <g clip-path="url(#clip0_12230_27114)">
                    <path d="M32 0C14.3271 0 0 14.3271 0 32C0 49.6729 14.3271 64 32 64C49.6729 64 64 49.6729 64 32C64 14.3271 49.6729 0 32 0ZM43.0605 33.6963L27.0605 43.6963C26.7362 43.8984 26.3691 44 26 44C25.666 44 25.332 43.917 25.0312 43.749C24.3945 43.3965 24 42.7275 24 42V22C24 21.2725 24.3945 20.6035 25.0312 20.251C25.6621 19.8955 26.4414 19.919 27.0605 20.3037L43.0605 30.3037C43.6445 30.67 44 31.3106 44 32C44 32.6894 43.6445 33.3301 43.0605 33.6963Z"
                      fill="#313030" />
                  </g>
                  <defs>
                    <clipPath id="clip0_12230_27114">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            )}
          </Box>
          {/* 新增的框、文字和按钮 */}
          <Box
            //marginTop="100px"
            marginRight="189px"
            position="absolute"
            //top="100%"
            bottom="-20%"
            left="50%"
            transform="translateX(-50%)"
            width="90vw"
            height="auto"
            borderRadius="8px"
            background="var(--Primary-50, #F1EEFC)"
            zIndex="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            padding="20px"
          >
            <Box
              gap="37px"
              color="var(--Grey-100, #313030)"
              fontFamily={poppins.style.fontFamily}
              fontSize="24px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="36px"
              textAlign="center"
              paddingTop="70px"
              display="flex"
              justifyContent="center"
            //flexDirection="column"
            >
              Trusted by happy students and professional tutors
              <Button
                display="flex"
                width="190px"
                height="48px"
                padding="12px 24px"
                justifyContent="center"
                alignItems="center"
                borderRadius="4px"
                background="#8973E9"
                color="white"
                _hover={{
                  backgroundColor: "var(--Primary-300, #7156E5)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Book a free trial
              </Button>

            </Box>
          </Box>
        </>
      )}

      {!isLargerThan768 && (
        <Box
          position="relative"
          width="288px"
          height="252px"
          flexShrink="0"
        //overflow="hidden"
        >
          <Box
            as="video"
            src="https://s3-figma-videos-production-sig.figma.com/video/205500934632290305/TEAM/0903/ae6b/-c34c-4f8d-aa0b-a6540ddbaa08?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsiTVEHUHR0j6gnFB43rNl9YhraQpujedLjEj1553d364vvnoYwMGCGs1w5cjsAaoV4YRpj0ogljywlDgLDlAFmdEHmTsmdik7aKC7LrHmh8x3-6TCgkf6DvK4ODDqauqGguhoGRDYHs9-0fJ8x5jSovPVI4pEDpbbhqGGPL02aeRuums-6aWZn81HLk-LbE3snVtFmhDgntFAqALSZ4M3R18FRjYLLQ5icdZpcl3vxh4xPJ4uKaxlZAZCSXYJXj0w1x2Qrn7JtQXK9-ch4PDCNxxzi8qtiCtF5eqjyG1nQdN2IIasEHWj7dvj~7T5f3S6xSd2Tk4FZZvrRF-on3Lw__"
            controls
            autoPlay={isPlaying}
            width="100%"
            height="100%"
            display={isPlaying ? "block" : "none"}
          />
          {!isPlaying && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
              background="rgba(0, 0, 0, 0.5)"
              cursor="pointer"
              onClick={handlePlay}
              zIndex="2"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none">
                <g clip-path="url(#clip0_12230_27114)">
                  <path d="M32 0C14.3271 0 0 14.3271 0 32C0 49.6729 14.3271 64 32 64C49.6729 64 64 49.6729 64 32C64 14.3271 49.6729 0 32 0ZM43.0605 33.6963L27.0605 43.6963C26.7362 43.8984 26.3691 44 26 44C25.666 44 25.332 43.917 25.0312 43.749C24.3945 43.3965 24 42.7275 24 42V22C24 21.2725 24.3945 20.6035 25.0312 20.251C25.6621 19.8955 26.4414 19.919 27.0605 20.3037L43.0605 30.3037C43.6445 30.67 44 31.3106 44 32C44 32.6894 43.6445 33.3301 43.0605 33.6963Z"
                    fill="#313030" />
                </g>
                <defs>
                  <clipPath id="clip0_12230_27114">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          )}
          <Button
            display="flex"
            width="288px"
            height="40px"
            padding="12px 24px"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
            background="#8973E9"
            color="white"
            _hover={{
              backgroundColor: "#7156E5",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            marginTop="20px"
            marginBottom="20px"
          >
            Book a free trial
          </Button>
        </Box>
      )}
    </Flex>
  );
}

function WhyBaodaoTalk() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const text1 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize in providing high-quality lessons and resources to help you master Taiwanese Chinese. Our experienced instructors offer personalized guidance and engaging learning materials to make your language journey effective and enjoyable."
  const previewText1 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize... "
  const displayedText1 = isExpanded ? text1 : previewText1

  const text2 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize in providing high-quality lessons and resources to help you master Taiwanese Chinese. Our experienced instructors offer personalized guidance and engaging learning materials to make your language journey effective and enjoyable."
  const previewText2 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize... "
  const displayedText2 = isExpanded ? text2 : previewText2

  const text3 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize in providing high-quality lessons and resources to help you master Taiwanese Chinese. Our experienced instructors offer personalized guidance and engaging learning materials to make your language journey effective and enjoyable."
  const previewText3 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize... "
  const displayedText3 = isExpanded ? text3 : previewText3

  const text4 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize in providing high-quality lessons and resources to help you master Taiwanese Chinese. Our experienced instructors offer personalized guidance and engaging learning materials to make your language journey effective and enjoyable."
  const previewText4 = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize... "
  const displayedText4 = isExpanded ? text4 : previewText4

  return (
    <Flex
      direction="column"
      marginTop={isLargerThan768 ? '100px' : '0'}
      padding="50px 16px"
      gap="16px"
      width="100%"
      height="454px"
      align={isLargerThan1440 ? 'center' : ''}
    >
      <Box>
        <Box textAlign={isLargerThan768 ? 'center' : 'left'} fontSize={isLargerThan768 ? '32px' : '24px'} fontWeight="bold" mb={6}>
          Why Baodao Talk?
        </Box>

        {isLargerThan768 ? (
          <Flex
            direction="row"
            wrap="nowrap"
            overflowX="auto"
            width="100%"
            gap="16px"
          >
            {/* 在大於768px的屏幕上顯示橫排內容 */}
            {[1].map(index => (
              <Flex
                key={index}
                width="289px"
                height="312px"
                padding="20px"
                paddingBottom="56px"
                flexDirection="column"
                align-items="flex-start"
                gap="16px"
                flex-shrink="0"
                border-radius="8px"
                border="1px solid var(--Grey-10, #F5F6F9)"
                background="#FAFAFA"
              >
                {/* 圖片和底色圓圈 */}
                <Box
                  width="80px"
                  height="80px"
                  position="relative"
                  flex-shrink="0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#FEA32B" />
                  </svg>
                  <Box
                    width="40px"
                    height="40px"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    zIndex="1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M19.9987 33.3332H8.66536C6.79852 33.3332 5.8651 33.3332 5.15206 32.9699C4.52486 32.6503 4.01492 32.1403 3.69534 31.5131C3.33203 30.8001 3.33203 29.8667 3.33203 27.9998V11.9998C3.33203 10.133 3.33203 9.19957 3.69534 8.48654C4.01492 7.85933 4.52486 7.34939 5.15206 7.02982C5.8651 6.6665 6.79852 6.6665 8.66536 6.6665H9.33203C13.0657 6.6665 14.9326 6.6665 16.3586 7.39313C17.613 8.03228 18.6329 9.05215 19.2721 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332M19.9987 33.3332V17.3332M19.9987 33.3332H31.332C33.1989 33.3332 34.1323 33.3332 34.8453 32.9699C35.4725 32.6503 35.9825 32.1403 36.3021 31.5131C36.6654 30.8001 36.6654 29.8667 36.6654 27.9998V11.9998C36.6654 10.133 36.6654 9.19957 36.3021 8.48654C35.9825 7.85933 35.4725 7.34939 34.8453 7.02982C34.1323 6.6665 33.1989 6.6665 31.332 6.6665H30.6654C26.9317 6.6665 25.0648 6.6665 23.6388 7.39313C22.3843 8.03228 21.3645 9.05215 20.7253 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Box>
                </Box>

                <Box>
                  <Text
                    width="258px"
                    color="var(--Grey-100, #313030)"
                    fontFamily={poppins.style.fontFamily}
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                  >
                    Learning Taiwan's Language: Traditional Chinese
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="var(--Grey-100, #313030)"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    {displayedText1}

                    {/* "more" 按鈕 */}
                    <Button
                      onClick={handleToggle}
                      variant="link"
                      colorScheme="teal"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                      textDecorationLine="underline"
                    >
                      {isExpanded ? 'Show Less' : 'read more'}
                    </Button>
                  </Text>
                </Box>
              </Flex>
            ))}
            {/* image2 */}
            <Flex
              display="flex"
              width="289px"
              height="312px"
              padding="20px"
              paddingBottom="56px"
              flexDirection="column"
              align-items="flex-start"
              gap="16px"
              flex-shrink="0"
              border-radius="8px"
              border="1px solid var(--Grey-10, #F5F6F9)"
              background="#FAFAFA"

            >
              {/*圖片和底色圓圈*/}
              <Box
                width="80px"
                height="80px"
                position="relative"
                flex-shrink="0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#FEA32B" />
                </svg>
                <Box
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M36.6654 20.0002H33.332M31.7836 31.7853L29.4266 29.4283M6.66536 20.0002H3.33203M10.5702 10.5721L8.21322 8.21509M19.9987 6.66683V3.3335M29.4266 10.5721L31.7836 8.21509M19.9987 36.6668V33.3335M8.21322 31.7853L10.5702 29.4283M19.9987 11.6668L22.5737 16.8835L28.332 17.7252L24.1654 21.7835L25.1487 27.5168L19.9987 24.8085L14.8487 27.5168L15.832 21.7835L11.6654 17.7252L17.4237 16.8835L19.9987 11.6668Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Box>
              </Box>

              <Box>
                <Text
                  width="258px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={poppins.style.fontFamily}
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="28px" /* 155.556% */
                >
                  Comprehensive Customized Services
                </Text>
              </Box>

              <Box>
                <Text
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px" /* 150% */
                >
                  {displayedText2}

                  {/* "more" 按钮 */}
                  <Button
                    onClick={handleToggle}
                    variant="link"
                    colorScheme="teal"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px" /* 150% */
                    textDecorationLine="underline"
                  >
                    {isExpanded ? 'Show Less' : 'read more'}
                  </Button>
                </Text>
              </Box>
            </Flex>
            {/* image3 */}
            <Flex
              display="flex"
              width="289px"
              height="312px"
              padding="20px"
              paddingBottom="56px"
              flexDirection="column"
              align-items="flex-start"
              gap="16px"
              flex-shrink="0"
              border-radius="8px"
              border="1px solid var(--Grey-10, #F5F6F9)"
              background="#FAFAFA"
            >
              {/*圖片和底色圓圈*/}
              <Box
                width="80px"
                height="80px"
                position="relative"
                flex-shrink="0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                    fill="#FEA32B" />
                </svg>
                <Box
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M34.9987 26.6665V11.9998C34.9987 10.133 34.9987 9.19957 34.6354 8.48654C34.3158 7.85933 33.8059 7.34939 33.1787 7.02982C32.4656 6.6665 31.5322 6.6665 29.6654 6.6665H10.332C8.46519 6.6665 7.53177 6.6665 6.81873 7.02982C6.19152 7.34939 5.68159 7.85933 5.36201 8.48654C4.9987 9.19957 4.9987 10.133 4.9987 11.9998V26.6665M7.77648 33.3332H32.2209C33.2542 33.3332 33.7709 33.3332 34.1948 33.2196C35.3451 32.9114 36.2436 32.0129 36.5518 30.8626C36.6654 30.4387 36.6654 29.922 36.6654 28.8887C36.6654 28.3721 36.6654 28.1137 36.6086 27.9018C36.4545 27.3267 36.0052 26.8774 35.4301 26.7233C35.2181 26.6665 34.9598 26.6665 34.4431 26.6665H5.55425C5.0376 26.6665 4.77928 26.6665 4.56733 26.7233C3.99218 26.8774 3.54293 27.3267 3.38882 27.9018C3.33203 28.1137 3.33203 28.3721 3.33203 28.8887C3.33203 29.922 3.33203 30.4387 3.44561 30.8626C3.75384 32.0129 4.65233 32.9114 5.80263 33.2196C6.22652 33.3332 6.74317 33.3332 7.77648 33.3332Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Box>
              </Box>

              <Box>
                <Text
                  width="258px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={poppins.style.fontFamily}
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="28px" /* 155.556% */
                >
                  Fully Integrated Teaching Material System
                </Text>
              </Box>

              <Box>
                <Text
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px" /* 150% */
                >
                  {displayedText3}

                  {/* "more" 按钮 */}
                  <Button
                    onClick={handleToggle}
                    variant="link"
                    colorScheme="teal"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px" /* 150% */
                    textDecorationLine="underline"
                  >
                    {isExpanded ? 'Show Less' : 'read more'}
                  </Button>
                </Text>
              </Box>
            </Flex>

            {/* image4 */}
            <Flex
              display="flex"
              width="289px"
              height="312px"
              padding="20px"
              paddingBottom="56px"
              flexDirection="column"
              align-items="flex-start"
              gap="16px"
              flex-shrink="0"
              border-radius="8px"
              border="1px solid var(--Grey-10, #F5F6F9)"
              background="#FAFAFA"
            >
              {/*圖片和底色圓圈*/}
              <Box
                width="80px"
                height="80px"
                position="relative"
                flex-shrink="0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                    fill="#FEA32B" />
                </svg>
                <Box
                  width="40px"
                  height="40px"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex="1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M18.705 4.05278C19.1776 3.79019 19.414 3.65889 19.6642 3.60741C19.8858 3.56185 20.1142 3.56185 20.3358 3.60741C20.586 3.65889 20.8224 3.79019 21.295 4.05278L33.6284 10.9046C34.1276 11.182 34.3772 11.3206 34.5589 11.5179C34.7197 11.6923 34.8414 11.8992 34.9159 12.1244C35 12.3791 35 12.6646 35 13.2357V26.7642C35 27.3353 35 27.6208 34.9159 27.8755C34.8414 28.1008 34.7197 28.3076 34.5589 28.4821C34.3772 28.6793 34.1276 28.818 33.6284 29.0953L21.295 35.9472C20.8224 36.2098 20.586 36.3411 20.3358 36.3925C20.1142 36.4381 19.8858 36.4381 19.6642 36.3925C19.414 36.3411 19.1776 36.2098 18.705 35.9472L6.37162 29.0953C5.87241 28.818 5.62281 28.6793 5.44106 28.4821C5.28026 28.3076 5.15858 28.1008 5.08414 27.8755C5 27.6208 5 27.3353 5 26.7642V13.2357C5 12.6646 5 12.3791 5.08414 12.1244C5.15858 11.8992 5.28026 11.6923 5.44106 11.5179C5.62281 11.3206 5.87241 11.182 6.37162 10.9046L18.705 4.05278Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9943 15.1132C18.3282 13.1653 15.5498 12.6413 13.4622 14.425C11.3747 16.2086 11.0808 19.1908 12.7202 21.3003C13.7702 22.6515 16.4593 25.157 18.2571 26.7839C18.8545 27.3245 19.1532 27.5949 19.511 27.7033C19.8185 27.7965 20.17 27.7965 20.4776 27.7033C20.8354 27.5949 21.1341 27.3245 21.7315 26.7839C23.5293 25.157 26.2184 22.6515 27.2684 21.3003C28.9078 19.1908 28.6498 16.1899 26.5263 14.425C24.4029 12.6601 21.6604 13.1653 19.9943 15.1132Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Box>
              </Box>

              <Box>
                <Text
                  width="258px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={poppins.style.fontFamily}
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="28px" /* 155.556% */
                >
                  Transparent User Contracts and Refund Policy
                </Text>
              </Box>

              <Box>
                <Text
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px" /* 150% */
                >
                  {displayedText4}

                  {/* "more" 按钮 */}
                  <Button
                    onClick={handleToggle}
                    variant="link"
                    colorScheme="teal"
                    fontFamily={roboto.style.fontFamily}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px" /* 150% */
                    textDecorationLine="underline"
                  >
                    {isExpanded ? 'Show Less' : 'read more'}
                  </Button>
                </Text>
              </Box>
            </Flex>
          </Flex>
        ) : (
          <>
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop
              style={{
                width: '288px',
                height: '312px',
              }}
              onPaginationUpdate={(swiper) => {
                // 更新自定義點點的邏輯
                if (paginationRef.current) {
                  const activeIndex = swiper.activeIndex;
                  const bullets = paginationRef.current.querySelectorAll('rect');
                  bullets.forEach((bullet, index) => {
                    bullet.setAttribute('fill', index === activeIndex ? '#7156E5' : '#ADACAC');
                  });
                }
              }}
            >
              <SwiperSlide>
                {/* image1 */}
                <Flex
                  display="flex"
                  width="289px"
                  height="312px"
                  padding="20px"
                  paddingBottom="56px"
                  flexDirection="column"
                  align-items="flex-start"
                  gap="16px"
                  flex-shrink="0"
                  border-radius="8px"
                  border="1px solid var(--Grey-10, #F5F6F9)"
                  background="#FAFAFA"
                >
                  {/*圖片和底色圓圈*/}
                  <Box
                    width="80px"
                    height="80px"
                    position="relative"
                    flex-shrink="0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                        fill="#FEA32B" />
                    </svg>
                    <Box
                      width="40px"
                      height="40px"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex="1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9987 33.3332H8.66536C6.79852 33.3332 5.8651 33.3332 5.15206 32.9699C4.52486 32.6503 4.01492 32.1403 3.69534 31.5131C3.33203 30.8001 3.33203 29.8667 3.33203 27.9998V11.9998C3.33203 10.133 3.33203 9.19957 3.69534 8.48654C4.01492 7.85933 4.52486 7.34939 5.15206 7.02982C5.8651 6.6665 6.79852 6.6665 8.66536 6.6665H9.33203C13.0657 6.6665 14.9326 6.6665 16.3586 7.39313C17.613 8.03228 18.6329 9.05215 19.2721 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332M19.9987 33.3332V17.3332M19.9987 33.3332H31.332C33.1989 33.3332 34.1323 33.3332 34.8453 32.9699C35.4725 32.6503 35.9825 32.1403 36.3021 31.5131C36.6654 30.8001 36.6654 29.8667 36.6654 27.9998V11.9998C36.6654 10.133 36.6654 9.19957 36.3021 8.48654C35.9825 7.85933 35.4725 7.34939 34.8453 7.02982C34.1323 6.6665 33.1989 6.6665 31.332 6.6665H30.6654C26.9317 6.6665 25.0648 6.6665 23.6388 7.39313C22.3843 8.03228 21.3645 9.05215 20.7253 10.3066C19.9987 11.7326 19.9987 13.5995 19.9987 17.3332"
                          stroke="#FE9000"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      width="258px"
                      color="var(--Grey-100, #313030)"
                      fontFamily={poppins.style.fontFamily}
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="28px" /* 155.556% */
                    >
                      Learning Taiwan's Language: Traditional Chinese
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px" /* 150% */
                    >
                      {displayedText1}

                      {/* "more" 按钮 */}
                      <Button
                        onClick={handleToggle}
                        variant="link"
                        colorScheme="teal"
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="24px" /* 150% */
                        textDecorationLine="underline"
                      >
                        {isExpanded ? 'Show Less' : 'read more'}
                      </Button>
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                {/* image2 */}
                <Flex
                  display="flex"
                  width="289px"
                  height="312px"
                  padding="20px"
                  paddingBottom="56px"
                  flexDirection="column"
                  align-items="flex-start"
                  gap="16px"
                  flex-shrink="0"
                  border-radius="8px"
                  border="1px solid var(--Grey-10, #F5F6F9)"
                  background="#FAFAFA"

                >
                  {/*圖片和底色圓圈*/}
                  <Box
                    width="80px"
                    height="80px"
                    position="relative"
                    flex-shrink="0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#FEA32B" />
                    </svg>
                    <Box
                      width="40px"
                      height="40px"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex="1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M36.6654 20.0002H33.332M31.7836 31.7853L29.4266 29.4283M6.66536 20.0002H3.33203M10.5702 10.5721L8.21322 8.21509M19.9987 6.66683V3.3335M29.4266 10.5721L31.7836 8.21509M19.9987 36.6668V33.3335M8.21322 31.7853L10.5702 29.4283M19.9987 11.6668L22.5737 16.8835L28.332 17.7252L24.1654 21.7835L25.1487 27.5168L19.9987 24.8085L14.8487 27.5168L15.832 21.7835L11.6654 17.7252L17.4237 16.8835L19.9987 11.6668Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      width="258px"
                      color="var(--Grey-100, #313030)"
                      fontFamily={poppins.style.fontFamily}
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="28px" /* 155.556% */
                    >
                      Comprehensive Customized Services
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px" /* 150% */
                    >
                      {displayedText2}

                      {/* "more" 按钮 */}
                      <Button
                        onClick={handleToggle}
                        variant="link"
                        colorScheme="teal"
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="24px" /* 150% */
                        textDecorationLine="underline"
                      >
                        {isExpanded ? 'Show Less' : 'read more'}
                      </Button>
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                {/* image3 */}
                <Flex
                  display="flex"
                  width="289px"
                  height="312px"
                  padding="20px"
                  paddingBottom="56px"
                  flexDirection="column"
                  align-items="flex-start"
                  gap="16px"
                  flex-shrink="0"
                  border-radius="8px"
                  border="1px solid var(--Grey-10, #F5F6F9)"
                  background="#FAFAFA"
                >
                  {/*圖片和底色圓圈*/}
                  <Box
                    width="80px"
                    height="80px"
                    position="relative"
                    flex-shrink="0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                        fill="#FEA32B" />
                    </svg>
                    <Box
                      width="40px"
                      height="40px"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex="1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M34.9987 26.6665V11.9998C34.9987 10.133 34.9987 9.19957 34.6354 8.48654C34.3158 7.85933 33.8059 7.34939 33.1787 7.02982C32.4656 6.6665 31.5322 6.6665 29.6654 6.6665H10.332C8.46519 6.6665 7.53177 6.6665 6.81873 7.02982C6.19152 7.34939 5.68159 7.85933 5.36201 8.48654C4.9987 9.19957 4.9987 10.133 4.9987 11.9998V26.6665M7.77648 33.3332H32.2209C33.2542 33.3332 33.7709 33.3332 34.1948 33.2196C35.3451 32.9114 36.2436 32.0129 36.5518 30.8626C36.6654 30.4387 36.6654 29.922 36.6654 28.8887C36.6654 28.3721 36.6654 28.1137 36.6086 27.9018C36.4545 27.3267 36.0052 26.8774 35.4301 26.7233C35.2181 26.6665 34.9598 26.6665 34.4431 26.6665H5.55425C5.0376 26.6665 4.77928 26.6665 4.56733 26.7233C3.99218 26.8774 3.54293 27.3267 3.38882 27.9018C3.33203 28.1137 3.33203 28.3721 3.33203 28.8887C3.33203 29.922 3.33203 30.4387 3.44561 30.8626C3.75384 32.0129 4.65233 32.9114 5.80263 33.2196C6.22652 33.3332 6.74317 33.3332 7.77648 33.3332Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      width="258px"
                      color="var(--Grey-100, #313030)"
                      fontFamily={poppins.style.fontFamily}
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="28px" /* 155.556% */
                    >
                      Fully Integrated Teaching Material System
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px" /* 150% */
                    >
                      {displayedText3}

                      {/* "more" 按钮 */}
                      <Button
                        onClick={handleToggle}
                        variant="link"
                        colorScheme="teal"
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="24px" /* 150% */
                        textDecorationLine="underline"
                      >
                        {isExpanded ? 'Show Less' : 'read more'}
                      </Button>
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                {/* image4 */}
                <Flex
                  display="flex"
                  width="289px"
                  height="312px"
                  padding="20px"
                  paddingBottom="56px"
                  flexDirection="column"
                  align-items="flex-start"
                  gap="16px"
                  flex-shrink="0"
                  border-radius="8px"
                  border="1px solid var(--Grey-10, #F5F6F9)"
                  background="#FAFAFA"
                >
                  {/*圖片和底色圓圈*/}
                  <Box
                    width="80px"
                    height="80px"
                    position="relative"
                    flex-shrink="0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                        fill="#FEA32B" />
                    </svg>
                    <Box
                      width="40px"
                      height="40px"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      zIndex="1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M18.705 4.05278C19.1776 3.79019 19.414 3.65889 19.6642 3.60741C19.8858 3.56185 20.1142 3.56185 20.3358 3.60741C20.586 3.65889 20.8224 3.79019 21.295 4.05278L33.6284 10.9046C34.1276 11.182 34.3772 11.3206 34.5589 11.5179C34.7197 11.6923 34.8414 11.8992 34.9159 12.1244C35 12.3791 35 12.6646 35 13.2357V26.7642C35 27.3353 35 27.6208 34.9159 27.8755C34.8414 28.1008 34.7197 28.3076 34.5589 28.4821C34.3772 28.6793 34.1276 28.818 33.6284 29.0953L21.295 35.9472C20.8224 36.2098 20.586 36.3411 20.3358 36.3925C20.1142 36.4381 19.8858 36.4381 19.6642 36.3925C19.414 36.3411 19.1776 36.2098 18.705 35.9472L6.37162 29.0953C5.87241 28.818 5.62281 28.6793 5.44106 28.4821C5.28026 28.3076 5.15858 28.1008 5.08414 27.8755C5 27.6208 5 27.3353 5 26.7642V13.2357C5 12.6646 5 12.3791 5.08414 12.1244C5.15858 11.8992 5.28026 11.6923 5.44106 11.5179C5.62281 11.3206 5.87241 11.182 6.37162 10.9046L18.705 4.05278Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9943 15.1132C18.3282 13.1653 15.5498 12.6413 13.4622 14.425C11.3747 16.2086 11.0808 19.1908 12.7202 21.3003C13.7702 22.6515 16.4593 25.157 18.2571 26.7839C18.8545 27.3245 19.1532 27.5949 19.511 27.7033C19.8185 27.7965 20.17 27.7965 20.4776 27.7033C20.8354 27.5949 21.1341 27.3245 21.7315 26.7839C23.5293 25.157 26.2184 22.6515 27.2684 21.3003C28.9078 19.1908 28.6498 16.1899 26.5263 14.425C24.4029 12.6601 21.6604 13.1653 19.9943 15.1132Z" stroke="#FE9000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </Box>
                  </Box>

                  <Box>
                    <Text
                      width="258px"
                      color="var(--Grey-100, #313030)"
                      fontFamily={poppins.style.fontFamily}
                      fontSize="18px"
                      fontStyle="normal"
                      fontWeight="700"
                      lineHeight="28px" /* 155.556% */
                    >
                      Transparent User Contracts and Refund Policy
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px" /* 150% */
                    >
                      {displayedText4}

                      {/* "more" 按钮 */}
                      <Button
                        onClick={handleToggle}
                        variant="link"
                        colorScheme="teal"
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="24px" /* 150% */
                        textDecorationLine="underline"
                      >
                        {isExpanded ? 'Show Less' : 'read more'}
                      </Button>
                    </Text>
                  </Box>
                </Flex>
              </SwiperSlide>

            </Swiper>
            <Box
              width="83px"
              height="8px"
              flex-shrink="0"
              padding="16px 85px"
              ref={paginationRef}
              className="custom-pagination"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                <rect width="48" height="8" rx="4" fill="#7156E5" />
                <rect x="52" width="8" height="8" rx="4" fill="#ADACAC" />
                <rect x="64" width="8" height="8" rx="4" fill="#ADACAC" />
                <rect x="75" width="8" height="8" rx="4" fill="#ADACAC" />
              </svg>
            </Box>
          </>
        )}

      </Box>

    </Flex>

  );
}

function Testimonials() {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");
  const swiperRef = useRef<SwiperCore | null>(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <Flex
      marginTop="50px"
      width="100%"
      height="506px"
      background="var(--Grey-100, #313030)"
      direction="column"
      position="relative"
    >
      <Flex
        direction="column"
        width="100%"
      //maxWidth="1200px"

      >
        <Text
          textAlign={isLargerThan768 ? 'center' : 'left'}
          width="100%"
          paddingX="16px"
          color="var(--Primary-200, #8973E9)"
          fontFamily={poppins.style.fontFamily}
          fontSize={isLargerThan768 ? "18px" : "16px"}
          fontStyle="normal"
          fontWeight="700"
          lineHeight={isLargerThan768 ? "30px" : "28px"} /* 175% */
          //paddingLeft="16px"
          paddingTop="33px"
        >
          TESTIMONIALS
        </Text>
        <Text
          textAlign={isLargerThan768 ? 'center' : 'left'}
          width={isLargerThan768 ? '100%' : '288px'}
          paddingX="16px"
          color="var(--White--Background, #FFF)"
          fontFamily={poppins.style.fontFamily}
          fontSize={isLargerThan768 ? "32px" : "20px"}
          fontStyle="normal"
          fontWeight="700"
          lineHeight={isLargerThan768 ? "48px" : "30px"} /* 150% */
          paddingBottom="24px"
        >
          What our students say about us
        </Text>

        {isLargerThan768 ? (
          // 大于768px屏幕时，显示横排布局
          <Flex
            align="center"
            direction="row"
            wrap="nowrap"
            overflowX="auto"
            width="100%"
            gap="16px"
            padding="0 30px"
            justify={isLargerThan1440 ? "center" : "flex-start"}
          >
            {[...Array(4)].map((_, index) => (
              <Flex

                key={index}
                width="288px"
                height="312px"
                padding="21.93px 24px 20px 24px"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="20.148px"
                borderRadius="8px"
                backgroundColor="#FFF"
                boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)"
              >
                <Flex
                  width="24px"
                  height="23.922px"
                  flexShrink="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="8px"
                >
                  {[...Array(5)].map((_, index) => (
                    <Box key={index} width="24px" height="25px">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clipPath="url(#clip0_12230_27167)">
                          <path d="M23.5477 9.80207C23.3715 9.27915 22.9174 8.8979 22.3706 8.81454L16.0072 7.84534L13.149 1.7763C12.9052 1.25899 12.3844 0.929688 11.8121 0.929688C11.2395 0.929688 10.719 1.25899 10.4752 1.7763L7.61661 7.84571L1.25324 8.81492C0.706486 8.89827 0.252361 9.27915 0.0764861 9.80244C-0.099389 10.3257 0.033361 10.9021 0.419986 11.2976L5.06699 16.0472L3.96636 22.7666C3.87561 23.3228 4.11224 23.8819 4.57386 24.2071C5.03511 24.5323 5.64411 24.5652 6.14024 24.2923L11.8125 21.1657L17.4847 24.2923C17.7086 24.4157 17.955 24.4762 18.2002 24.4762C18.4987 24.4762 18.7972 24.3858 19.0511 24.2071C19.5127 23.8823 19.749 23.3231 19.6582 22.7666L18.5576 16.0472L23.205 11.2976C23.5909 10.9021 23.7236 10.3257 23.5477 9.80207Z" fill="#FFE70A" />
                        </g>
                        <defs>
                          <clipPath id="clip0_12230_27167">
                            <rect width="24" height="23.9218" fill="white" transform="translate(0 0.929688)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  ))}
                </Flex>

                <Box>
                  <Text
                    width="240px"
                    color="var(--Grey-100, #313030)"
                    fontFamily="Roboto"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                    textAlign="center"
                  >
                    Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.
                  </Text>
                </Box>

                <Flex
                  height="80px"
                  paddingTop="20px"
                  justifyContent="center"
                  alignItems="center"
                  gap="16px"
                  direction="row"
                  borderTop="1px solid var(--Grey-10, #F5F6F9)"
                >
                  <Box
                    backgroundImage="url('https://static-prod-baodao.s3.amazonaws.com/man.png')"
                    width="60px"
                    height="60px"
                    borderRadius="full"
                    border="2px solid black"
                    backgroundSize="250%"
                    backgroundPosition="top -1px right -50px"
                    backgroundRepeat="no-repeat"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    transform="scale(1.1)"
                    transformOrigin="center"
                  />
                  <Box>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                      textAlign="center"
                    >
                      Alex Lee
                    </Text>
                    <Text
                      color="var(--Grey-100, #313030)"
                      fontFamily="Roboto"
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="22px"
                      textAlign="center"
                    >
                      Business manager
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        ) : (
          <>
            {/* Swiper Container */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop
              onPaginationUpdate={(swiper) => {
                // 更新自定義點點的邏輯
                if (paginationRef.current) {
                  const activeIndex = swiper.activeIndex;
                  const bullets = paginationRef.current.querySelectorAll('rect');
                  bullets.forEach((bullet, index) => {
                    bullet.setAttribute('fill', index === activeIndex ? '#7156E5' : '#ADACAC');
                  });
                }
              }}
            >
              <SwiperSlide>
                <Flex position="relative"
                  display="flex"
                  width="288px"
                  padding="21.93px 24px 20px 24px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap="20.148px"
                  borderRadius="8px"
                  backgroundColor="#FFF" // 用白色背景
                  boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)" // 盒子阴影
                  marginLeft="16px"
                  marginTop="24px"
                >

                  <Flex
                    width="24px"
                    height="23.922px"
                    flex-shrink="0"
                    display="flex"
                    alignItems="center"
                    gap="8px" // Star spacing
                  >
                    {[...Array(5)].map((_, index) => (
                      <Box
                        key={index}
                        width="24px"
                        height="25px"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <g clip-path="url(#clip0_12230_27167)">
                            <path d="M23.5477 9.80207C23.3715 9.27915 22.9174 8.8979 22.3706 8.81454L16.0072 7.84534L13.149 1.7763C12.9052 1.25899 12.3844 0.929688 11.8121 0.929688C11.2395 0.929688 10.719 1.25899 10.4752 1.7763L7.61661 7.84571L1.25324 8.81492C0.706486 8.89827 0.252361 9.27915 0.0764861 9.80244C-0.099389 10.3257 0.033361 10.9021 0.419986 11.2976L5.06699 16.0472L3.96636 22.7666C3.87561 23.3228 4.11224 23.8819 4.57386 24.2071C5.03511 24.5323 5.64411 24.5652 6.14024 24.2923L11.8125 21.1657L17.4847 24.2923C17.7086 24.4157 17.955 24.4762 18.2002 24.4762C18.4987 24.4762 18.7972 24.3858 19.0511 24.2071C19.5127 23.8823 19.749 23.3231 19.6582 22.7666L18.5576 16.0472L23.205 11.2976C23.5909 10.9021 23.7236 10.3257 23.5477 9.80207Z" fill="#FFE70A" />
                          </g>
                          <defs>
                            <clipPath id="clip0_12230_27167">
                              <rect width="24" height="23.9218" fill="white" transform="translate(0 0.929688)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Box>
                    ))}
                  </Flex>

                  <Box >
                    <Text
                      width="240px"
                      color="var(--Grey-100, #313030)" // 文字颜色
                      fontFamily={roboto.style.fontFamily} // 字體
                      fontSize="16px" // 字體大小
                      fontStyle="normal" // 字體风格
                      fontWeight="400" // 字體粗细
                      lineHeight="24px" // 行高
                    >
                      Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.
                    </Text>
                  </Box>

                  <Flex
                    height="80px" // 高度
                    paddingTop="20px" // 上内边距
                    justifyContent="flex-end" // 主轴对齐
                    alignItems="center" // 交叉轴对齐
                    gap="16px" // 元素间距
                    direction="row" // 默认的方向是行
                    border-top="1px solid var(--Grey-10, #F5F6F9)"
                  >
                    <Box
                      backgroundImage="url('https://static-prod-baodao.s3.amazonaws.com/man.png')"
                      width="60px"
                      height="60px"
                      borderRadius="full"
                      border="2px solid black"
                      backgroundSize="250%" // 背景图片覆蓋整个容器
                      backgroundPosition=" top -1px right -50px" // 背景圖片居中對齊
                      backgroundRepeat="no-repeat" // 不重複背景圖片
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden" // 裁剪溢出的内容
                      transform="scale(1.1)" // 调整图片的缩放比例（可选）
                      transformOrigin="center"
                    />

                    <Box>
                      <Text
                        color="var(--Grey-100, #313030)"
                        /* Subtitle 1 */
                        fontFamily={roboto.style.fontFamily}
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="24px" /* 150% */
                      >
                        Alex Lee
                      </Text>
                      <Text
                        color="var(--Grey-100, #313030)"
                        /* Subtitle 1 */
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="22px" /* 150% */
                      >
                        Business manager
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </SwiperSlide>

              <SwiperSlide>
                <Flex position="relative"
                  display="flex"
                  width="288px"
                  padding="21.93px 24px 20px 24px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap="20.148px"
                  borderRadius="8px"
                  backgroundColor="#FFF" // 用白色背景
                  boxShadow="0px 1px 7.2px 0px rgba(0, 0, 0, 0.11)" // 盒子阴影
                  marginLeft="16px"
                  marginTop="24px"
                >

                  <Flex
                    width="24px"
                    height="23.922px"
                    flex-shrink="0"
                    display="flex"
                    alignItems="center"
                    gap="8px" // Star spacing
                  >
                    {[...Array(5)].map((_, index) => (
                      <Box
                        key={index}
                        width="24px"
                        height="25px"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <g clip-path="url(#clip0_12230_27167)">
                            <path d="M23.5477 9.80207C23.3715 9.27915 22.9174 8.8979 22.3706 8.81454L16.0072 7.84534L13.149 1.7763C12.9052 1.25899 12.3844 0.929688 11.8121 0.929688C11.2395 0.929688 10.719 1.25899 10.4752 1.7763L7.61661 7.84571L1.25324 8.81492C0.706486 8.89827 0.252361 9.27915 0.0764861 9.80244C-0.099389 10.3257 0.033361 10.9021 0.419986 11.2976L5.06699 16.0472L3.96636 22.7666C3.87561 23.3228 4.11224 23.8819 4.57386 24.2071C5.03511 24.5323 5.64411 24.5652 6.14024 24.2923L11.8125 21.1657L17.4847 24.2923C17.7086 24.4157 17.955 24.4762 18.2002 24.4762C18.4987 24.4762 18.7972 24.3858 19.0511 24.2071C19.5127 23.8823 19.749 23.3231 19.6582 22.7666L18.5576 16.0472L23.205 11.2976C23.5909 10.9021 23.7236 10.3257 23.5477 9.80207Z" fill="#FFE70A" />
                          </g>
                          <defs>
                            <clipPath id="clip0_12230_27167">
                              <rect width="24" height="23.9218" fill="white" transform="translate(0 0.929688)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Box>
                    ))}
                  </Flex>

                  <Box >
                    <Text
                      width="240px"
                      color="var(--Grey-100, #313030)" // 文字颜色
                      fontFamily={roboto.style.fontFamily} // 字體
                      fontSize="16px" // 字體大小
                      fontStyle="normal" // 字體风格
                      fontWeight="400" // 字體粗细
                      lineHeight="24px" // 行高
                    >
                      Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible.
                    </Text>
                  </Box>

                  <Flex
                    height="80px" // 高度
                    paddingTop="20px" // 上内边距
                    justifyContent="flex-end" // 主轴对齐
                    alignItems="center" // 交叉轴对齐
                    gap="16px" // 元素间距
                    direction="row" // 默认的方向是行
                    border-top="1px solid var(--Grey-10, #F5F6F9)"
                  >
                    <Box
                      backgroundImage="url('https://static-prod-baodao.s3.amazonaws.com/man.png')"
                      width="60px"
                      height="60px"
                      borderRadius="full"
                      border="2px solid black"
                      backgroundSize="250%" // 背景图片覆蓋整个容器
                      backgroundPosition=" top -1px right -50px" // 背景圖片居中對齊
                      backgroundRepeat="no-repeat" // 不重複背景圖片
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      overflow="hidden" // 裁剪溢出的内容
                      transform="scale(1.1)" // 调整图片的缩放比例（可选）
                      transformOrigin="center"
                    />

                    <Box>
                      <Text
                        color="var(--Grey-100, #313030)"
                        /* Subtitle 1 */
                        fontFamily={roboto.style.fontFamily}
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="24px" /* 150% */
                      >
                        Alex Lee
                      </Text>
                      <Text
                        color="var(--Grey-100, #313030)"
                        /* Subtitle 1 */
                        fontFamily={roboto.style.fontFamily}
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="22px" /* 150% */
                      >
                        Business manager
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </SwiperSlide>
            </Swiper>

            <Box
              width="83px"
              height="8px"
              flex-shrink="0"
              paddingTop="16px"
              paddingLeft="125px"
              ref={paginationRef}
              className="custom-pagination"

            >
              <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                <rect width="48" height="8" rx="4" fill="#7156E5" />
                <rect x="52" width="8" height="8" rx="4" fill="#ADACAC" />
                <rect x="64" width="8" height="8" rx="4" fill="#ADACAC" />
                <rect x="75" width="8" height="8" rx="4" fill="#ADACAC" />
              </svg>
            </Box>
          </>
        )}
      </Flex>
    </Flex>
  );
}



function BaodaoSeries() {
  const [displayText, setDisplayText] = useState("Exclusive teaching & learning materials");
  const [showBaodaoSeries, setShowBaodaoSeries] = useState(true);
  const [showLearnChinese, setShowLearnChinese] = useState(false);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan1440] = useMediaQuery("(min-width: 1440px)");
  const lineWidth = isLargerThan768 ? '510' : '261';
  const [activeButton, setActiveButton] = useState<"BaoDao" | "LearnChinese">("BaoDao");
  const handleButtonClick = (buttonName: "BaoDao" | "LearnChinese") => {
    setActiveButton(buttonName); // 更新状态以反映当前点击的按钮
    if (buttonName === "BaoDao") {
      setDisplayText("BaoDao series");
      setShowBaodaoSeries(true);
      setShowLearnChinese(false);
    } else if (buttonName === "LearnChinese") {
      setDisplayText("Let’s Learn Chinese");
      setShowBaodaoSeries(false);
      setShowLearnChinese(true);
    }
  };
  const images = [
    'https://static-prod-baodao.s3.amazonaws.com/bread.png',
    'https://static-prod-baodao.s3.amazonaws.com/bread.png',
    'https://static-prod-baodao.s3.amazonaws.com/bread.png',
    'https://static-prod-baodao.s3.amazonaws.com/bread.png'
  ]
  const totalSlides = images.length; // 總頁數
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const swiperRef = useRef<SwiperCore | null>(null);
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };


  return (
    <Flex
      width="100%"
      height={isLargerThan768 ? "650px" : "950px"}
      direction="column"
      paddingTop="32px"

    >
      <Box>
        <Text
          textAlign={isLargerThan768 ? 'center' : 'left'}
          color="var(--Primary-300, #7156E5)"
          fontFamily={poppins.style.fontFamily}
          fontSize={isLargerThan768 ? "18px" : "16px"}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px" // 175%
          paddingLeft="16px"
          textTransform="uppercase"
        >
          Learn Once, Remember Forever
        </Text>

        <Text
          paddingTop="16px"
          width={isLargerThan768 ? '100%' : '288px'}
          textAlign={isLargerThan768 ? 'center' : 'left'}
          height="60px"
          fontFamily={poppins.style.fontFamily}
          color="var(--Grey-100, #313030)"
          fontSize={isLargerThan768 ? "32px" : "20px"}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" // 150%
          paddingLeft="16px"
        >
          Exclusive teaching & learning materials
        </Text>
      </Box>
      <Flex
        direction={isLargerThan768 ? 'row' : 'column'} // 设置方向为横排或竖排
        justifyContent="center" // 水平居中对齐
        alignItems="center" // 垂直居中对齐
        wrap="wrap"
      >
        <Flex
          marginTop="24px"
          marginLeft={isLargerThan768 ? "16px" : "0px"}
          width="288px"
          height="48px"
          padding={isLargerThan768 ? "10px 78px" : "20px 40px"}
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          display="flex"
          borderRadius="4px"
          background={activeButton === "BaoDao" ? "#E2D4F4" : "#F5F6F9"}
          onClick={() => handleButtonClick("BaoDao")}
          cursor="pointer"
        >
          <Text
            fontFamily={poppins.style.fontFamily}
            color="var(--Grey-100, #313030)"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px" // 155.556%
          >
            BaoDao series
          </Text>
        </Flex>

        <Flex
          marginTop={isLargerThan768 ? "24px" : "12px"}
          //marginBottom="12px"
          marginLeft={isLargerThan768 ? "16px" : "0px"}
          width="288px"
          height="48px"
          padding="10px 55px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          display="flex"
          borderRadius="4px"
          background={activeButton === "LearnChinese" ? "#DDE9EF" : "#F5F6F9"} // 根据状态设置背景颜色
          onClick={() => handleButtonClick("LearnChinese")}
          cursor="pointer"
        >
          <Text
            fontFamily={poppins.style.fontFamily}
            color="var(--Grey-75, #6F6E6E)"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="28px" // 155.556%

          >
            Let’s Learn Chinese
          </Text>
        </Flex>
      </Flex>

      <Flex
        align={isLargerThan1440 ? 'center' : ''}
        direction={isLargerThan768 ? 'row' : 'column'} // 在小屏幕上为列，在大屏幕上为行
        justifyContent="center" // 居中对齐
        alignItems="center" // 垂直居中对齐
        padding={{ base: '16px', md: '0px 24px' }} // 根据屏幕大小调整内边距
        gap="30px" // 设置元素间的间距
      >
        <Flex
          width={{ base: '320px', md: '100%', lg: '1280px' }}
          height={{ base: '700px', md: '405px' }}
          direction="column"
          paddingLeft={{ base: '16px', md: '37px' }}
          paddingRight="16px"
          paddingTop={{ base: '16px', md: '48px' }}
          paddingBottom={{ base: '16px', md: '48px' }}
          backgroundColor={showBaodaoSeries ? '#E2D4F4' : showLearnChinese ? '#DDE9EF' : 'transparent'}
          display={showBaodaoSeries || showLearnChinese ? 'flex' : 'none'}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent="left"
            gap={{ base: '0', md: '30px' }}
            wrap={{ base: 'unset', md: 'nowrap' }}
            overflowX={{ base: 'unset', md: 'auto' }}
          >
            {showBaodaoSeries && (
              <Flex
                direction="column"
                paddingTop="24px"
                width={{ base: '100%', md: '574px' }}
                height={{ base: '420px', md: '309px' }}
                flexShrink="0"
                borderRadius="4px"
                background="var(--White--Background, #FFF)"
                position="relative"
              >

                <Text
                  paddingLeft="12px"
                  fontFamily={poppins.style.fontFamily}
                  color="var(--Grey-100, #313030)"
                  fontSize={{ base: '18px', md: '32px' }}
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="28px"
                  position="relative"
                  zIndex="1"
                >
                  BaoDao series
                  <Box
                    position="absolute"
                    width={{ base: '130px', md: '227px' }}
                    height={{ base: '7px', md: '14px' }}
                    flexShrink="0"
                    top="19px"
                    zIndex="-1"
                    overflow="hidden"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="232" height="22" viewBox="0 0 135 15" fill="none">
                      <path d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11" stroke="#E2D4F4" strokeWidth="8" strokeLinejoin="round" />
                    </svg>
                  </Box>
                </Text>

                <Box>
                  <Text
                    paddingTop={{ base: '12px', md: '24px' }}
                    paddingLeft="12px"
                    width={{ base: '261px', md: '510px' }}
                    color="var(--Grey-100, #313030)"
                    fontFamily={roboto.style.fontFamily}
                    fontSize={{ base: '16px', md: '18px' }}
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="24px"
                  >
                    Our teaching materials are in Traditional Chinese, focusing on Taiwanese life and culture. The course includes various exercises and practical example sentences. Designed in a spiral structure, it continually revisits, deepens, and expands learned content while integrating new and old material.Our teaching materials are in Traditional Chinese     </Text>
                </Box>


                <Box
                  paddingTop="20px"
                  paddingLeft="12px"
                  paddingBottom="20px"
                  width={lineWidth}
                  height="0px"
                  flexShrink="0"
                  stroke-width="1px"
                  stroke="var(--Grey-100, #313030)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={lineWidth}
                    height="2"
                    viewBox={`0 0 ${lineWidth} 2`}
                    fill="none"
                  >
                    <path d={`M0 1H${lineWidth}`} stroke="#313030" />
                  </svg>
                </Box>
                <Flex
                  alignItems="center"
                  display="flex"
                  paddingLeft="12px"
                  width="19.619px"
                  height="20px"
                  flexShrink="0"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.80952 0C4.39957 0 0 4.485 0 10C0 15.515 4.39957 20 9.80952 20C15.2195 20 19.619 15.515 19.619 10C19.619 4.485 15.2195 0 9.80952 0ZM15.8865 6.96L8.61276 14.375C8.12719 14.785 7.69557 14.785 7.24433 14.375L3.72762 10.8C3.36467 10.43 3.36467 9.825 3.72762 9.455C4.09057 9.085 4.67424 9.085 5.03719 9.455L7.92119 12.395L14.572 5.615C14.935 5.245 15.5187 5.245 15.8816 5.615C16.2446 5.985 16.2446 6.59 15.8816 6.96H15.8865Z" fill="#313030" />
                    </svg>

                    <Text
                      paddingTop="22px"
                      paddingBottom="12px"
                      paddingLeft="11.38px"
                      width={{ base: '229px', md: '380px' }}
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize={{ base: '14px', md: '18px' }}
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      Ideal for beginners and basic level learners
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            )}


            <Flex
              direction={{ base: 'column', md: 'row' }}
              justifyContent="left"
              gap={{ base: '0', md: '30px' }}
              wrap={{ base: 'unset', md: 'nowrap' }}
              overflowX={{ base: 'unset', md: 'auto' }}
            >
              {showLearnChinese && (
                <Flex
                  direction="column"
                  paddingTop="24px"
                  width={{ base: '100%', md: '574px' }}
                  height={{ base: '420px', md: '309px' }}
                  flexShrink="0"
                  borderRadius="4px"
                  background="var(--White--Background, #FFF)"
                  position="relative"
                >

                  <Text
                    paddingLeft="12px"
                    fontFamily={poppins.style.fontFamily}
                    color="var(--Grey-100, #313030)"
                    fontSize={{ base: '18px', md: '32px' }}
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    position="relative"
                    zIndex="1"
                  >
                    Let’s Learn Chinese
                    <Box
                      position="absolute"
                      width={{ base: '130px', md: '227px' }}
                      height={{ base: '7px', md: '14px' }}
                      flexShrink="0"
                      top="19px"
                      zIndex="-1"
                      overflow="hidden"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="232" height="22" viewBox="0 0 135 15" fill="none">
                        <path d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11" stroke="#DDE9EF" strokeWidth="8" strokeLinejoin="round" />
                      </svg>
                    </Box>
                  </Text>

                  <Box>
                    <Text
                      paddingTop={{ base: '12px', md: '24px' }}
                      paddingLeft="12px"
                      width={{ base: '261px', md: '510px' }}
                      color="var(--Grey-100, #313030)"
                      fontFamily={roboto.style.fontFamily}
                      fontSize={{ base: '16px', md: '18px' }}
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="24px"
                    >
                      Designed for adults, our courses are graded according to learners' Chinese proficiency levels, allowing users of different abilities to learn at their desired level. The teaching materials are based on the "Taiwan Basic Chinese Language Proficiency" (TBCL) guidelines, quantitatively ranked according to learners' environments and abilities.
                    </Text>
                  </Box>


                  <Box
                    paddingTop="20px"
                    paddingLeft="12px"
                    paddingBottom="20px"
                    width={lineWidth}
                    height="0px"
                    flexShrink="0"
                    stroke-width="1px"
                    stroke="var(--Grey-100, #313030)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={lineWidth} height="2" viewBox="0 0 ${lineWidth} 2" fill="none">
                      <path d={`M0 1H${lineWidth}`} stroke="#313030" />
                    </svg>
                  </Box>
                  <Flex
                    alignItems="center"
                    display="flex"
                    paddingLeft="12px"
                    width="19.619px"
                    height="20px"
                    flexShrink="0"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.80952 0C4.39957 0 0 4.485 0 10C0 15.515 4.39957 20 9.80952 20C15.2195 20 19.619 15.515 19.619 10C19.619 4.485 15.2195 0 9.80952 0ZM15.8865 6.96L8.61276 14.375C8.12719 14.785 7.69557 14.785 7.24433 14.375L3.72762 10.8C3.36467 10.43 3.36467 9.825 3.72762 9.455C4.09057 9.085 4.67424 9.085 5.03719 9.455L7.92119 12.395L14.572 5.615C14.935 5.245 15.5187 5.245 15.8816 5.615C16.2446 5.985 16.2446 6.59 15.8816 6.96H15.8865Z" fill="#313030" />
                      </svg>

                      <Text
                        paddingTop="22px"
                        paddingBottom="12px"
                        paddingLeft="11.38px"
                        width={{ base: '229px', md: '380px' }}
                        color="var(--Grey-100, #313030)"
                        fontFamily={roboto.style.fontFamily}
                        fontSize={{ base: '14px', md: '18px' }}
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="22px"
                      >
                        Ideal for beginners and basic level learners
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              )}



              <Flex
                direction={{ base: 'column', md: 'row' }} // 小屏幕时垂直排列，大屏幕时水平排列
                position="relative"
                width="100%" // 确保占满容器宽度
                height={{ base: '0', md: '309px' }} // 高度根据屏幕大小调整
                alignItems="center" // 垂直居中对齐
                paddingLeft="30px"
              >
                <Flex
                  direction="column"
                  position="relative"
                  width={{ base: '288px', md: '470px' }} // 在大屏幕上占一半宽度
                  height={{ base: '350px', md: '309px' }}
                  display={{ base: 'flex', md: 'flex' }}
                >
                  {isLargerThan768 ? (
                    <>
                      {/* Custom Buttons for Larger Screens */}
                      <Box
                        onClick={handlePrevClick}
                        position="absolute"
                        left="-40px"
                        top="50%"
                        transform="translateY(-50%)"
                        width="32px"
                        height="32px"
                        borderRadius="50%"
                        background="#FFF"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                        zIndex="10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill="#FFF" />
                        </svg>
                        <Box
                          position="absolute"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="16px"
                          height="16px"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 4L6 8L10 12" stroke="#ADACAC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Box>
                      </Box>
                      <Box
                        onClick={handleNextClick}
                        position="absolute"
                        right="-40px"
                        top="50%"
                        transform="translateY(-50%)"
                        width="32px"
                        height="32px"
                        borderRadius="50%"
                        background="#FFF"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        cursor="pointer"
                        zIndex="10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="16" fill="#FFF" />
                        </svg>
                        <Box
                          position="absolute"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="16px"
                          height="16px"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 12L10 8L6 4" stroke="#313030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </Box>
                      </Box>
                      <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        modules={[Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        loop
                        onSlideChange={(swiper) => {
                          setCurrentPage(swiper.activeIndex + 1); // 更新當前頁碼
                        }}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}

                      >
                        {images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <Image
                              paddingTop={{ base: '16px', md: '0' }}
                              width={{ base: '320px', md: '470px' }}
                              height={{ base: '189px', md: '309px' }}
                              flexShrink={0}
                              borderRadius="4px"
                              src={image}
                              alt={`Image ${index + 1}`}
                              boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                              objectFit={{ base: 'cover', md: 'unset' }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      <Box
                        position="absolute"
                        bottom="0"
                        right="0"
                        display="inline-flex"
                        padding="0px 12px 0px 13px"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="35px"
                        background="rgba(111, 110, 110, 0.74)"
                        zIndex="20"
                      >
                        <Text
                          color="#FFF"
                          fontFamily={roboto.style.fontFamily}
                          fontSize="12px"
                          fontStyle="normal"
                          fontWeight="400"
                          lineHeight="22px"
                          letterSpacing="1px"
                        >
                          {currentPage}/{totalSlides}
                        </Text>
                      </Box>
                    </>
                  ) : (
                    // Swiper for Smaller Screens
                    <Swiper
                      modules={[Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      loop
                      pagination={{ clickable: true }} // 启用分页器
                      onSlideChange={(swiper) => {
                        setCurrentPage(swiper.activeIndex + 1); // 更新当前页码
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      onPaginationUpdate={(swiper) => {
                        if (paginationRef.current) {
                          const activeIndex = swiper.activeIndex;
                          const bullets = paginationRef.current.querySelectorAll('rect');
                          bullets.forEach((bullet, index) => {
                            bullet.setAttribute('fill', index === activeIndex ? '#7156E5' : '#ADACAC');
                          });
                        }
                      }}
                    >
                      {images.map((image, index) => (
                        <SwiperSlide key={index}>

                          <Image
                            paddingTop={{ base: '16px', md: '0' }}
                            width={{ base: '320px', md: '470px' }}
                            height={{ base: '189px', md: '309px' }}
                            flexShrink={0}
                            borderRadius="4px"
                            src={image}
                            alt={`Image ${index + 1}`}
                            boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                            objectFit={{ base: 'cover', md: 'unset' }}
                          />

                        </SwiperSlide>
                      ))}
                    </Swiper>

                  )}
                  <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    display="inline-flex"
                    padding="0px 12px 0px 13px"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="35px"
                    background="rgba(111, 110, 110, 0.74)"
                    zIndex="20"
                  >
                    <Text
                      color="#FFF"
                      fontFamily={roboto.style.fontFamily}
                      fontSize="12px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="22px"
                      letterSpacing="1px"
                    >
                      {currentPage}/{totalSlides}
                    </Text>
                  </Box>
                </Flex>

                <Box
                  width="83px"
                  height="8px"
                  flexShrink="0"
                  padding="16px"
                  paddingLeft="5px"
                  paddingBottom="24px"
                  ref={paginationRef}
                  className="custom-pagination"
                  display={{ base: 'block', md: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
                    <rect width="48" height="8" rx="4" fill="#7156E5" />
                    <rect x="52" width="8" height="8" rx="4" fill="#ADACAC" />
                    <rect x="64" width="8" height="8" rx="4" fill="#ADACAC" />
                    <rect x="75" width="8" height="8" rx="4" fill="#ADACAC" />
                  </svg>
                </Box>
              </Flex>

            </Flex>

          </Flex>
        </Flex>

      </Flex>




    </Flex >

  );
}

const Circle = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="2" />
  </svg>
)

const Triangle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M2.38823 18.0986L10.6131 3.89195C11.0677 3.10679 11.295 2.71421 11.5915 2.58235C11.8502 2.46734 12.1454 2.46734 12.4041 2.58235C12.7006 2.71421 12.9279 3.10679 13.3825 3.89195L21.6074 18.0986C22.0636 18.8866 22.2917 19.2806 22.258 19.6039C22.2286 19.886 22.0808 20.1423 21.8514 20.309C21.5885 20.5002 21.1332 20.5002 20.2227 20.5002H3.77292C2.86239 20.5002 2.40713 20.5002 2.14417 20.309C1.91482 20.1423 1.76705 19.886 1.73764 19.6039C1.70393 19.2806 1.93203 18.8866 2.38823 18.0986Z" stroke="#313030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18" stroke="#313030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const tableContent = [
  ['', 'BaoDao Talk', 'Chinese language School', 'Other Online Brands'],
  ['Number of students', '1-on-1 classes', 'Group classes', '1-on-1 or group'],
  ['Language types', 'Traditional Chinese', 'Simplified Chinese', 'Simplified Chinese'],
  ['Teachers', 'Evaluated and graded', 'Fixed teachers', 'Large and uneven'],
  ['Tutor professional support', 'Available', 'Not always', 'No'],
  ['Course prices', 'Fixed based on tutors level', 'Varies by school', 'Set by tutors,vicious competition'],
  ['Chinese proficiency test courses', 'Available', 'Available', 'Not necessarily'],
  ['Teaching materials', 'Complete and serialized', 'Varies by school', 'Prepared by tutors'],
  ['Customized lesson', 'Available', 'Not available', 'Not always'],
  ['Payment method', 'Small installments', 'Long-term and large', 'Small installments'],
  ['Refund service', 'Complete refund policy', 'Not necessarily', 'Only refund to the platform account'],
  ['', '', '', '']
];

const icons = [
  [],
  [<Circle color="#FFFFFF" />, <Triangle />],
  [<Circle color="#FFFFFF" />, <Triangle />, <Triangle />],
  [<Circle color="#FFFFFF" />],
  [<Circle color="#FFFFFF" />, <Triangle />, <Cross />],
  [<Circle color="#FFFFFF" />],
  [<Circle color="#FFFFFF" />, <Circle color="#000000" />],
  [<Circle color="#FFFFFF" />, <Triangle />, <Triangle />],
  [<Circle color="#FFFFFF" />, <Cross />],
  [<Circle color="#FFFFFF" />, <Triangle />, <Circle color="#000000" />],
  [<Circle color="#FFFFFF" />, <Triangle />],
  []
]
function Compare() {
  const rows = tableContent.length;
  const columns = tableContent[0].length;
  const [showIcon, setShowIcon] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(false); // 隱藏圖標
      if (timerRef.current) {
        clearTimeout(timerRef.current); // 清除舊的計時器
      }

      timerRef.current = setTimeout(() => {
        setShowIcon(true); // 顯示圖標
      }, 1000); // 使用者停止滾動 1 秒後顯示圖標
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // 移除滾動事件監聽器
      if (timerRef.current) {
        clearTimeout(timerRef.current); // 清除計時器
      }
    };
  }, []);

  return (
    <Flex
      display="column"
      width="100%"
      height="1120px"
      overflow="hidden"
      padding="32px 16px 936px 16px"
      flexDirection="column"
      alignItems="center"
      flexShrink="0"
      background="var(--White--Background, #FFF)"
      position="relative"
    >

      <Text
        width="288px"
        height="60px"
        //flexShrink="0"
        color="var(--Grey-100, #313030)"
        fontFamily={poppins.style.fontFamily}
        fontSize="20px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="30px"
      >
        Take a closer look at BaoDao Talk
      </Text>


      <Box flex="1" overflow="auto" borderRadius="8px">
        <Flex direction="row" >
          {/* Fixed Column */}
          <Flex
            fontFamily={poppins.style.fontFamily}
            direction="column"
            position="sticky"
            left="0"
            backgroundColor="#f1f1f1"
            zIndex="1"
            overflowY="auto"
            boxSizing="border-box"
            //minWidth="157px"
            height="calc(100% - 60px)"
            fontSize="18px"

          >

            {tableContent.map((row, rowIndex) => (
              <Box
                key={rowIndex}
                width="157px"
                padding="20px 10px 19px 16px"
                height="84px"
                fontSize="16px"
                backgroundColor={
                  rowIndex === tableContent.length - 1
                    ? '#FFFFFF' // 最後一格的顏色設定為透明
                    : rowIndex === 0
                      ? '#FFFFFF' // 第一行的顏色設定
                      : rowIndex % 2 === 0
                        ? '#FFFFFF' // 偶數行的顏色設定
                        : '#D9D9D9' // 奇數行的顏色設定
                }
                color="#000000"
                textAlign="left"
                display="flex"
                alignItems="center"
                borderRadius={
                  rowIndex === 1
                    ? '8px 0px 0px 0px' // 每欄的第一格圓角
                    : rowIndex === tableContent.length - 1
                      ? '0px 0px 8px 8px' // 每欄的最後一格圓角
                      : '0px' // 其他格子
                }
              >
                <Text fontWeight="bold" >
                  {row[0]}
                </Text>
              </Box>
            ))}
          </Flex>

          {showIcon && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translateX(-50%)"
              zIndex="10"
              width="122px"
              height="122px"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                <g clip-path="url(#clip0_12744_10698)">
                  <rect width="122" height="122" rx="61" fill="#F5F6F9" />
                  <path d="M86.2578 0H35.7422C16.003 0 0 16.003 0 35.7422V86.2578C0 105.997 16.003 122 35.7422 122H86.2578C105.997 122 122 105.997 122 86.2578V35.7422C122 16.003 105.997 0 86.2578 0ZM61.9031 26.2395L65.8276 22.315C66.3828 21.7598 67.2906 21.7694 67.8315 22.346C68.3557 22.9036 68.3009 23.79 67.76 24.3309L66.2589 25.8321H79.9958L78.497 24.3333C77.9394 23.7757 77.9108 22.8345 78.4803 22.2912C78.7496 22.0339 79.0951 21.9076 79.443 21.9076C79.7909 21.9076 80.1578 22.0434 80.4295 22.3174L84.354 26.2419C84.8996 26.7876 84.8996 27.6716 84.354 28.2173L80.4295 32.1418C79.8743 32.697 78.9664 32.6874 78.4255 32.1108C77.9013 31.5532 77.9561 30.6668 78.497 30.1259L79.9982 28.6247H66.2612L67.76 30.1235C68.3176 30.6811 68.3462 31.6223 67.7767 32.1656C67.5075 32.4229 67.1619 32.5492 66.8141 32.5492C66.4662 32.5492 66.0992 32.4134 65.8276 32.1394L61.9031 28.2149C61.3574 27.6692 61.3574 26.7852 61.9031 26.2395ZM34.5746 61.641C32.5754 59.6418 32.5754 56.4012 34.5746 54.402C36.5738 52.4028 39.8144 52.4028 41.8136 54.402L47.53 60.1184V23.3039C47.53 20.4755 49.8222 18.1856 52.6482 18.1856C55.4766 18.1856 57.7665 20.4779 57.7665 23.3039V42.4784C57.7665 39.65 60.0588 37.3601 62.8848 37.3601C65.7132 37.3601 68.0031 39.6524 68.0031 42.4784V47.5037C68.0031 44.6754 70.2953 42.3855 73.1214 42.3855C75.9498 42.3855 78.2396 44.6777 78.2396 47.5037V53.0891C78.2396 50.2607 80.5319 47.9708 83.3579 47.9708C86.1863 47.9708 88.4762 50.263 88.4762 53.0891V64.6743C88.4762 66.0492 88.2236 67.4098 87.728 68.6917L83.5462 79.5383C83.0529 80.8202 82.798 82.1832 82.798 83.5557C82.798 84.3516 82.1522 84.9997 81.354 84.9997H53.3369C52.6268 84.9997 52.0335 84.4802 51.912 83.7797C51.5593 81.7614 50.6562 79.8647 49.2837 78.3111L34.5627 61.6434L34.5746 61.641ZM88.9218 98.2314C88.9218 101.315 86.4222 103.817 83.3365 103.817H51.6927C48.6094 103.817 46.1074 101.317 46.1074 98.2314V92.6461C46.1074 89.5628 48.607 87.0608 51.6927 87.0608H83.3389C86.4222 87.0608 88.9242 89.5604 88.9242 92.6461V98.2314H88.9218Z" fill="#313030" fill-opacity="0.95" />
                </g>
                <defs>
                  <clipPath id="clip0_12744_10698">
                    <rect width="122" height="122" rx="61" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          )}

          {/* Scrollable Content */}
          <Box flex="1"
            overflowX="auto"
            overflowY="hidden"
          >
            <Flex direction="column" >
              {tableContent.map((row, rowIndex) => (
                <Flex key={rowIndex} direction="row">
                  {row.slice(1).map((cell, colIndex) => (
                    <Box
                      key={colIndex}
                      flex="none"
                      width={
                        rowIndex === 0 && (colIndex === 1 || colIndex === 2)
                          ? "70px"
                          : "180px"
                      }
                      margin={
                        rowIndex === 0 && (colIndex === 1 || colIndex === 2)
                          ? "0 10px" // 確保第二欄和第三欄的第一格之間有間隔
                          : "0"
                      }
                      height={
                        rowIndex === 0 && colIndex === 1
                          ? "40px"
                          : rowIndex === 0 && colIndex === 2
                            ? "40px"
                            : rowIndex === 0
                              ? "60px"
                              : "84px"
                      }
                      marginTop={
                        rowIndex === 0 && colIndex === 1
                          ? "43px" // 或其他適合的值以確保不影響其他格子
                          : rowIndex === 0 && colIndex === 2
                            ? "43px"
                            : rowIndex === 0
                              ? "24px" // 或其他適合的值
                              : "0px"
                      }
                      padding="10px"
                      fontFamily={roboto.style.fontFamily}
                      fontWeight="700"
                      fontSize="16px"
                      textAlign="center"
                      alignItems="center"
                      display="flex"
                      justifyContent="center"
                      borderRadius={
                        rowIndex === 0
                          ? '8px 8px 0px 0px' // 每欄的第一格圓角
                          : rowIndex === tableContent.length - 1
                            ? '0px 0px 8px 8px' // 每欄的最後一格圓角
                            : '0px' // 其他格子
                      }

                      minWidth={colIndex === 0 ? "157px" : "157px"}
                      minHeight={colIndex === 0 ? "50px" : "auto"}
                      backgroundColor={
                        rowIndex === tableContent.length - 1
                          ? colIndex === 0
                            ? '#385C95' // 按鈕行的背景色
                            : 'transparent' // 其他格子背景透明
                          : rowIndex === 0 && colIndex === 0
                            ? '#385C95'
                            : rowIndex === 0
                              ? '#000000'
                              : colIndex === 0
                                ? rowIndex % 2 === 0
                                  ? '#2F5289'
                                  : '#385C95'
                                : rowIndex % 2 === 0
                                  ? '#FFFFFF'
                                  : '#D9D9D9'
                      }
                      color={rowIndex === tableContent.length - 1 && colIndex === 0
                        ? '#FFFFFF' // 按鈕行的文字顏色
                        : rowIndex === tableContent.length - 1
                          ? 'transparent' // 其他格子的文字顏色透明
                          : rowIndex === 0
                            ? '#FFFFFF'
                            : colIndex === 0
                              ? '#FFFFFF'
                              : '#000000'
                      }
                      cursor={
                        rowIndex === tableContent.length - 1 && colIndex === 0
                          ? 'pointer' // 按鈕的游標樣式
                          : 'default'
                      }
                      onClick={
                        rowIndex === tableContent.length - 1 && colIndex === 0
                          ? () => alert('Get Started Clicked') // 按鈕點擊事件
                          : undefined
                      }
                    >

                      {rowIndex === tableContent.length - 1 && colIndex === 0
                        ? (
                          <Flex
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            height="100%"

                          >
                            <Box
                              borderRadius="4px"
                              background="#FEA32B"
                              display="flex"
                              width="140px"
                              height="48px"
                              padding="12px 24px"
                              justifyContent="center"
                              alignItems="center"
                              _hover={{
                                background: '#FE9000',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                              }}
                            >
                              <Text color="#FFFFFF" fontWeight="700" fontSize="16px" fontFamily={roboto.style.fontFamily}>
                                Get Started
                              </Text>
                            </Box>
                          </Flex>
                        )
                        : icons[rowIndex] && icons[rowIndex][colIndex]
                          ? (
                            <Flex direction="column" alignItems="center">
                              {icons[rowIndex][colIndex]} {/* 渲染圖標 */}
                              <Text mt="8px">{cell}</Text> {/* 顯示內容 */}
                            </Flex>
                          ) : (
                            <Text>{cell}</Text> // 沒有圖標的情況下僅顯示文本
                          )}
                    </Box>
                  ))}
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
function Duration() {
  const contentMap: Record<string, string[]> = {
    '0-80 hrs': [
      'Understanding of correct pronunciation rules',
      'Ability to recognize simple characters',
      'Learning 300 common Mandarin words'
    ],
    '80-240 hrs': [
      'Able to engage in simple Q&A',
      'Able to differentiate units and use classifiers',
      'Capable of conducting slow-paced conversations',
      'Learning 500 Mandarin words'
    ],
    '240-360 hrs': [
      'Able to understand common phrases and sentences',
      'Capable of conducting simple, longer Q&A sessions',
      'Comprehend commonly used texts in daily life',
      'Learning 1000 Mandarin words'
    ],
    '360-480 hrs': [
      'Able to engage in general communication',
      'Capable of understanding the majority of conversations',
      'Able to conduct conversations at a moderate pace',
      'Learning 2500 Mandarin words'
    ],
    '480-960 hrs': [
      'Able to converse fluently with native speakers',
      'Capable of understanding the majority of articles',
      'Able to use sophisticated vocabulary',
      'Learning more than 5000 Mandarin words'
    ]
  };

  const learningOutcomesMap: Record<string, string[]> = {
    '0-80 hrs': ['Can handle greetings and self-introductions; with help, can understand texts indirectly.'],
    '80-240 hrs': ['Meets basic travel needs and daily conversations with slow-paced conversation and body language'],
    '240-360 hrs': ['Understands most questions and conversations, responds appropriately, overcomes travel language barriers, and engages in basic business conversations.'],
    '360-480 hrs': ['Proficient in Mandarin, understands most Taiwanese speech, and converses effectively for travel, business, or living in Taiwan despite some vocabulary and grammar inaccuracies.'],
    '480-960 hrs': ['Fluent in Mandarin, including idioms and slang, and meets most business needs; further education would cover mid to high-level requirements.']
  };

  const [activeContent, setActiveContent] = useState<string[]>([]);
  const [selectedButton, setSelectedButton] = useState('');
  const [activeLearningOutcome, setActiveLearningOutcome] = useState<string[]>([]);
  const handleButtonClick = (content: string) => {
    const newContent = contentMap[content] || [];
    const newContentLearn = learningOutcomesMap[content] || [];
    setActiveContent(newContent); // 更新顯示内容
    setActiveLearningOutcome(newContentLearn); // 更新學習成果
    setSelectedButton(content); // 更新激活的按钮
  };

  useEffect(() => {
    // 默認激活第一個按钮
    const firstKey = Object.keys(contentMap)[0];
    setActiveContent(contentMap[firstKey]);
    setActiveLearningOutcome(learningOutcomesMap[firstKey]);
    setSelectedButton(firstKey);
  }, []);



  return (
    <Flex
      display="column"
      width="100%"
      height="900"
      overflow="hidden"
      padding="32px 16px 800px 16px"
      flexDirection="column"
      alignItems="center"
      flexShrink="0"
      background="var(--Grey-100, #313030)"

    >
      <Text
        //width="288px"
        height="60px"
        //flexShrink="0"
        color="var(--White--Background, #FFF)"
        fontFamily={poppins.style.fontFamily}
        fontSize="20px"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="30px"
      >
        What can you learn from BaoDao Talk?
      </Text>

      <Text
        paddingTop="24px"
        //width="288px"
        height="66px"
        color="var(--White--Background, #FFF)"
        fontFamily={roboto.style.fontFamily}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="24px"
      >
        Based on your learning time, we have an average learning outcome for your reference:
      </Text>

      <Flex direction="column" align="center" pb="4" width="100%">
        {/* 按钮区域 */}
        <Flex
          overflowX="auto"
          whiteSpace="nowrap"
          paddingTop="36px"
          paddingBottom="16px"
          maxWidth="100%"
          gap="10px"
        >
          {Object.keys(contentMap).map((content, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(content)}
              colorScheme="teal"
              minWidth="80px"
              flexShrink={0}
              bg={selectedButton === content ? '#FE9000' : 'white'}
              color={selectedButton === content ? 'white' : 'black'}
              _hover={{
                bg: selectedButton === content ? '#FE9000' : '#f0f0f0'
              }}
            >
              {content}
            </Button>
          ))}
        </Flex>

        {/* Duration 区域 */}
        <Flex
          direction="column"
          width="100%"
          padding="8px 8px"
          justifyContent="center"
          alignItems="center"
          borderRight="1px solid #F5F6F9"
          background="#F5F6F9"
        >
          <Text
            color="#313030"
            textAlign="center"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontWeight="700"
            lineHeight="28px"
            paddingTop="8px"
            paddingBottom="8px"
            width="100%"
          >
            Duration
          </Text>
          <Text
            marginTop="8px"
            color="#313030"
            textAlign="center"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontWeight="700"
            lineHeight="28px"
            paddingTop="16px"
            paddingBottom="16px"
            width="100%"
          >
            {selectedButton}
          </Text>
        </Flex>
      </Flex>

      {/* Learning goals  區域 */}
      <Flex
        direction="column"
        marginTop="-13px"
        padding="8px 70px 8px 70px"
        justifyContent="center"
        alignItems="center"
        borderRight="1px solid #F5F6F9"
        background="#F5F6F9"
        width="100%"
      >
        <Text
          color="#313030"
          textAlign="center"
          fontFamily={poppins.style.fontFamily}
          fontSize={{ base: "18px", md: "20px", lg: "20px" }}
          fontWeight="700"
          lineHeight="28px"
          fontStyle="normal"
        //width="288px"
        >
          Learning goals
        </Text>

        <Flex
          direction={{ base: "column", lg: "row" }}
          flexWrap="wrap"
          alignItems="flex-start"
          marginTop="16px"
          padding="8px"
          width={{ base: "256px", md: "100%", lg: "100%" }}
          maxWidth={{ base: "256px", md: "100%", lg: "100%" }}
        >
          {/* 项目符號部分 */}
          {activeContent.map((item, index) => (
            <Flex
              key={index}
              alignItems="center"
              marginBottom={{ base: "10px", lg: "auto" }}
              //flexBasis={{ base: "100%", lg: "auto" }} // 小屏幕时占满整行，大屏幕时根据内容自动调整宽度
              marginRight={{ lg: "10px" }} // 大屏幕时项目之间的间距
              flex="1"
              minWidth={{ base: "256px", md: "auto", lg: "auto" }}
            >
              <Flex
                width="5px"
                height="5px"
                borderRadius="50%"
                backgroundColor="#000000"
                marginRight="10px"
                alignSelf="flex-start"
                marginTop="8px"
                flexShrink={0}
              />
              <Text
                fontFamily={roboto.style.fontFamily}
                fontSize={{ base: "16px", md: "18px", lg: "18px" }}
                fontWeight="400"
                lineHeight="22px"
                color="#313030"
                fontStyle="normal"
                alignSelf="flex-start"
                marginBottom="12px"
                word-Wrap="break-word"

                flex="1"
              >
                {item}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Learning outcomes 區域 */}
      <Flex
        direction="column"
        marginTop="-21px"
        paddingTop="8px"

      >
        <Flex
          direction="column"
          alignItems="center"
          marginTop="16px"
          padding="8px"
          background="#F5F6F9"
          borderRight="1px solid #F5F6F9"

        >
          <Text
            color="#313030"
            textAlign="center"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontWeight="700"
            lineHeight="28px"
            fontStyle="normal"
            width="180px"
            flexShrink="0"
          >
            Learning outcomes
          </Text>

          <Flex
            direction="column"
            alignItems="flex-start"
            marginTop="16px"
            padding="8px"
            width="256px"
          >
            {activeLearningOutcome.length > 0 ? (
              activeLearningOutcome.map((item, index) => (
                <Text
                  key={index}
                  color="#313030"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="22px"
                  fontStyle="normal"
                  width="100%"
                >
                  {item}
                </Text>
              ))
            ) : (
              <Text
                color="#313030"
                fontFamily={roboto.style.fontFamily}
                fontSize="16px"
                fontWeight="400"
                lineHeight="22px"
                fontStyle="normal"
              >
                No learning outcome available.
              </Text>
            )}
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}
function Askedquestion() {
  return (
    <Flex
      width="100%"
      height="775px"
      background="var(--Primary-50, #F1EEFC)"
      display="flex"
      flexDirection="column"
      gap="19.468px"
    >
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Text
          height="30px"
          flexShrink="0"
          color="var(--Grey-100, #313030)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" // 150%
          paddingTop="32px"
          paddingLeft="16px"
        >
          Frequently asked questions
        </Text>
      </Flex>



      <Flex
        marginLeft="16px"
        width="288px"
        flexShrink="0"
        borderRadius="4px"
        background="#FFF"
        marginTop="50px"
        overflow="auto"
        flexDirection="column"
      >

        {/* Q1 */}
        <Accordion allowToggle width="100%" >
          <AccordionItem >
            {({ isExpanded }) => ( // 使用 `isExpanded` 来判断面板是否展开
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                      color={isExpanded ? "var(--Primary-300, #7156E5)" : "var(--Grey-100, #313030)"}
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      How is Mandarin in Taiwan different?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                </AccordionPanel>

                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.
                </AccordionPanel>
                <Box height="20px" background="#F1EEFC" />
              </>
            )}
          </AccordionItem>

          {/* Q2 */}
          <AccordionItem >
            {({ isExpanded }) => ( // 使用 `isExpanded` 来判断面板是否展开
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                      color={isExpanded ? "var(--Primary-300, #7156E5)" : "var(--Grey-100, #313030)"}
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      How to sign up for a free Mandarin class?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                </AccordionPanel>

                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.            </AccordionPanel>
                <Box height="20px" background="#F1EEFC" />
              </>
            )}
          </AccordionItem>

          {/* Q3 */}
          <AccordionItem >
            {({ isExpanded }) => ( // 使用 `isExpanded` 来判断面板是否展开
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                      color={isExpanded ? "var(--Primary-300, #7156E5)" : "var(--Grey-100, #313030)"}
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      How to choose a tutor?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                </AccordionPanel>

                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.            </AccordionPanel>
                <Box height="20px" background="#F1EEFC" />
              </>
            )}
          </AccordionItem>

          {/* Q4 */}
          <AccordionItem >
            {({ isExpanded }) => ( // 使用 `isExpanded` 来判断面板是否展开
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                      color={isExpanded ? "var(--Primary-300, #7156E5)" : "var(--Grey-100, #313030)"}
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      How to pay for the course fees?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                </AccordionPanel>

                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.            </AccordionPanel>
                <Box height="20px" background="#F1EEFC" />
              </>
            )}
          </AccordionItem>

          {/* Q5 */}
          <AccordionItem >
            {({ isExpanded }) => ( // 使用 `isExpanded` 来判断面板是否展开
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as='span'
                      flex='1'
                      textAlign='left'
                      color={isExpanded ? "var(--Primary-300, #7156E5)" : "var(--Grey-100, #313030)"}
                      fontFamily={roboto.style.fontFamily}
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="22px"
                    >
                      What is spiral curriculum design?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Taiwanese Mandarin offers a unique and enriching linguistic experience, differing from mainland Mandarin in pronunciation, vocabulary, and writing. It features fewer retroflex sounds and uses Traditional Chinese characters, adding depth to your language skills.
                </AccordionPanel>

                <AccordionPanel
                  pb={4}
                  width="256px"
                  color="var(--Grey-100, #313030)"
                  fontFamily={roboto.style.fontFamily}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="23px"
                >
                  Learning Traditional Chinese provides cultural insights, enhances communication, supports learning Simplified Chinese, and boosts professional opportunities.            </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>

  )
}
function ContactUs() {
  const toast = useToast();
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const learnedChineseRef = useRef<HTMLSelectElement>(null);
  const goalRef = useRef<HTMLSelectElement>(null);
  const commentsRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const learnedChinese = learnedChineseRef.current?.value;
    const goal = goalRef.current?.value;
    const comments = commentsRef.current?.value;

    if (!fullName || !email || !learnedChinese || !goal) {
      toast({
        title: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "謝謝您的填寫",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear all fields
    if (fullNameRef.current) fullNameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (learnedChineseRef.current) learnedChineseRef.current.value = '';
    if (goalRef.current) goalRef.current.value = '';
    if (commentsRef.current) commentsRef.current.value = '';
  };


  return (
    <Flex
      width="100%"
      height="796px"
      background="var(--White--Background, #FFF)"
      direction="column"
    >
      <Flex>
        <Text
          width="288px"
          height="30px"
          flexShrink="0"
          color="var(--Grey-100, #313030)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" // 150%
          paddingTop="32px"
          paddingLeft="16px"
          paddingBottom="16px"
        >
          Contact us
        </Text>
      </Flex>
      <Flex>
        <Text
          paddingTop="20px"
          paddingLeft="16px"
          paddingBottom="20px"
          width="288px"
          color="var(--Grey-100, #313030)"
          fontFamily={roboto.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
        >
          Fill out the form, we will get in touch with you within 2 business days. You can also use Intercom for immediate online consultation with us.
        </Text>
      </Flex>

      <Box
        as="form"
        onSubmit={handleSubmit}
        padding="16px"
        background="var(--White--Background, #FFF)"
        borderTop="1px solid var(--Grey-200, #EAEAEA)"
      >
        <FormControl isRequired mb={4}>
          <FormLabel
            htmlFor="fullName"
            color="var(--Grey-100, #313030)"
            fontFamily="Roboto, sans-serif"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px"
          >
            Full Name
          </FormLabel>
          <Input id="fullName" ref={fullNameRef} placeholder="" />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="email" color="var(--Grey-100, #313030)"
            fontFamily="Roboto, sans-serif"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px">Email</FormLabel>
          <Input id="email" type="email" ref={emailRef} placeholder="" />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="learnedChinese" color="var(--Grey-100, #313030)"
            fontFamily="Roboto, sans-serif"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px">How you learned Chinese</FormLabel>
          <Select id="learnedChinese" ref={learnedChineseRef}>
            <option value=""></option>
            <option value="selfStudy">Self-Study</option>
            <option value="languageSchool">Language School</option>
            <option value="onlineCourse">Online Course</option>
            <option value="tutor">Tutor</option>
            <option value="immersion">Immersion</option>
          </Select>
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel htmlFor="goal" color="var(--Grey-100, #313030)"
            fontFamily="Roboto, sans-serif"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px">What is your goal</FormLabel>
          <Select id="goal" ref={goalRef}>
            <option value=""></option>
            <option value="travel">Travel</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="personalGrowth">Personal Growth</option>
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="comments" color="var(--Grey-100, #313030)"
            fontFamily="Roboto, sans-serif"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px">Message</FormLabel>
          <Textarea
            id="comments"
            ref={commentsRef}
            placeholder="Tell us your challenge, requirements or ask us a question"
            sx={{
              '::placeholder': {
                color: 'var(--Grey-75, #6F6E6E)',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '22px', // 157.143%
              },
            }}
          />
        </FormControl>

        <Button type="submit"
          sx={{
            display: 'flex',
            width: '288px',
            height: '40px',
            padding: '7px 91px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            borderRadius: '4px',
            background: '#8973E9',
            color: '#FFF', // 按钮文字颜色设置为白色
            _hover: {
              background: '#7156E5', // 鼠标悬停时按钮的背景色
            }
          }}
        >
          Send message
        </Button>
      </Box>
    </Flex>
  )
}
function Last() {
  return (
    <Flex
      display="flex"
      width="100%"
      height="629px"
      padding="32px 16px"
      flexDirection="column"
      alignItems="flex-start"
      gap="19.468px"
      background="var(--Grey-10, #F5F6F9)"
    >
      <Flex
        direction="column" // 设置為水平排列
        alignItems="center" // 垂直居中對齊
      >
        <Box>
          <Image   /*左上角baodaotalk*/
            src='https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png' alt='Dan Abramov'
            width="160px"
            height="60px"
          />
        </Box>
      </Flex>
      <Flex
        direction="column"
        gap="10px"
      >
        <Box
          width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize={{ base: "16px", md: "42px" }}
          fontStyle="normal"
          fontWeight="600"
          lineHeight="24px"
        >
          BaoDao Talk
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          About us
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          Blog
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          FAQs
        </Box>
      </Flex>

      <Flex
        direction="column"
        gap="10px"
      >
        <Box
          width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="24px"
        >
          Legal
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          Terms of Use
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          Privacy Policy
        </Box>
      </Flex>

      <Flex
        direction="column"
        gap="10px"
      >
        <Box
          width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="24px"
        >
          Contacts
        </Box>
        <Box width="100%"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          Shang Chin Education and Training Co., Ltd.
        </Box>
        <Box width="288px"
          height="auto"
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.8"
        >
          2 F., No. 250, Zhishan Rd., Xiping Vil., Xitun Dist., Taichung City 407036, Taiwan (R.O.C.)
        </Box>
      </Flex>

      <Flex
        direction="column"
        gap="21.39px"
      >
        <Box
          width="288px"
          height="0.995px"
          flexShrink="0"
          border="1px solid var(--Grey-50, #ADACAC)"
          opacity="0.2"
          background="var(--Grey-100, #313030)"
        />
        <Box
          color="var(--Grey-100, #313030)"
          fontFamily="Roboto, sans-serif"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="22px"
          opacity="0.65"
        //textAlign="center"
        >
          © 2024 BaoDao Talk company Limited
        </Box>
      </Flex>

      <Flex
        direction="row"
        gap="16px"
      >
        <Box
          width="32px"
          height="32px"
          position="relative"
          flex-shrink="0"
          display="flex"
          padding="7px"
          justify-content="center"
          align-items="center"
          borderRadius="33px"
          background="var(--Grey-100, #313030)"
        >
          <Box
            width="18px"
            height="18px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 2.0625C4.03877 2.0625 2.94349 2.36522 2.14849 3.10342C1.34597 3.84864 0.9375 4.95529 0.9375 6.375V11.625C0.9375 13.0448 1.34597 14.1514 2.14849 14.8966C2.94349 15.6348 4.03877 15.9375 5.25 15.9375H12.75C13.9613 15.9375 15.0566 15.6348 15.8515 14.8966C16.654 14.1514 17.0625 13.0448 17.0625 11.625V6.375C17.0625 4.95529 16.654 3.84864 15.8515 3.10342C15.0566 2.36522 13.9613 2.0625 12.75 2.0625H5.25ZM14.4214 6.27172C14.6672 6.08178 14.7125 5.72851 14.5225 5.48269C14.3326 5.23687 13.9793 5.19158 13.7335 5.38153L9.57315 8.5962C9.23557 8.85713 8.76435 8.85713 8.4267 8.5962L4.26645 5.38153C4.02062 5.19158 3.66737 5.23687 3.47741 5.48269C3.28746 5.72851 3.33275 6.08178 3.57858 6.27172L7.73887 9.48645C8.48167 10.0603 9.51825 10.0603 10.2611 9.48645L14.4214 6.27172Z" fill="white" stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </Box>
        </Box>

        <Box
          width="32px"
          height="32px"
          position="relative"
          flex-shrink="0"
          display="flex"
          padding="8px"
          justify-content="center"
          align-items="center"
          borderRadius="33px"
          background="var(--Grey-100, #313030)"
        >
          <Box
            width="16px"
            height="16px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_12962_2810)">
                <path d="M2.00172 14.3996H4.40172V5.51961H2.00172V14.3996ZM3.20172 1.59961C2.40172 1.59961 1.76172 2.23961 1.76172 3.03961C1.76172 3.83961 2.40172 4.47961 3.20172 4.47961C4.00172 4.47961 4.64172 3.83961 4.64172 3.03961C4.64172 2.23961 4.00172 1.59961 3.20172 1.59961ZM8.48172 6.87961V5.51961H6.08172V14.3996H8.48172V9.83961C8.48172 7.27961 11.7617 7.11961 11.7617 9.83961V14.3996H14.1617V8.95961C14.1617 4.63961 9.60172 4.79961 8.48172 6.87961Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_12962_2810">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        </Box>
        <Box
          width="32px"
          height="32px"
          position="relative"
          flex-shrink="0"
          display="flex"
          padding="6px"
          justify-content="center"
          align-items="center"
          borderRadius="33px"
          background="var(--Grey-100, #313030)"
        >
          <Box
            width="20px"
            height="20px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.7188 3.12848L11.6525 3.12598C9.64875 3.12598 8.35437 4.45348 8.35437 6.51035V8.06973H6.28125V10.8916H8.35437L8.35187 16.876H11.2525L11.255 10.8916H13.6337L13.6319 8.07035H11.255V6.74723C11.255 6.11098 11.4056 5.7891 12.2337 5.7891L13.7125 5.78848L13.7188 3.12848Z" fill="white" />
            </svg>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}
export default function App() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="0"
      width="100%"
      minHeight="100vh"
      background="#F5F5F5"
    >
      <Home />
      <Introduction />
      <Video />
      <WhyBaodaoTalk />
      <Testimonials />
      <BaodaoSeries />
      <Compare />
      <Duration />
      <Askedquestion />
      <ContactUs />
      <Last />
    </Flex>
  );
}
