"use client";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { poppins } from './font'
import { roboto } from './font'
import { useState } from "react";
import { Flex, Image, Box, Text, Button, AspectRatio } from "@chakra-ui/react";

function Home() {
  return (
    <Flex  //圖片和文字的距離
      direction="row"
      alignItems="center"
      width="320px"
      padding="14px 16px"
      gap="32px"
    >
      <Flex
        direction="row" // 设置為水平排列
        alignItems="center" // 垂直居中對齊
        gap="135px" // image icon的距離
      >

        <Box>
          <Image   /*左上角baodaotalk*/
            src='https://static-prod-baodao.s3.amazonaws.com/logo-horizontal-v2.png' alt='Dan Abramov'
            width="138px"
            height="51px"
          />
        </Box>

        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21"
              stroke="#313030"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </Box>
      </Flex>
    </Flex>
  );
}

function Introduction() {
  return (
    <>
      <Flex
        direction="column"
        padding="14px 16px"
        gap="16px"
        width="100%"
      >
        <Box>
          <Text  /*第一段文字*/
            color="#7959E4"
            fontFamily={poppins.style.fontFamily}
            fontSize="18px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="26px" /* 144.444% */
          >
            Online Mandarin Learning
          </Text>
        </Box>

        <Box>
          <Text  /*第二段文字*/
            color="var(--Grey-100, #313030)"
            //className={poppins.className}
            fontFamily={poppins.style.fontFamily}
            fontSize="24px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="33px" /* 137.5% */
          >
            Learn Taiwan's Language: Traditional Chinese
          </Text>
        </Box>

        <Box>
          <Text  /*第三段文字*/
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

        <Box>
          <Button  /*get started按鈕*/
            display="flex"
            width="288px"
            height="40px"
            padding="8px 24px"
            justify-content="center"
            align-items="center"
            flex-shrink="0"
            border-radius="4px"
            background="#8973E9"
            textColor="white"
            _hover={{
              backgroundColor: "var(--Primary-300, #7156E5)", // 滑鼠懸停的背景色
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // 陰影
            }}
          >
            Get started
          </Button>
        </Box>

        <Box>
          <Image /*台北101*/
            src='https://static-prod-baodao.s3.amazonaws.com/taipei101+.png' alt='Dan Abramov'
            width="288px"
            height="211px"
            flex-shrink="0"
          />
        </Box>
      </Flex>
    </>
  );
}

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="14px 16px"
      width="100%"
    >
      <Box position="relative"
        width="288px"
        height="252px"
        flexShrink="0"
        // paddingLeft="-93px"
        // paddingRight="-103px"
        overflow="hidden"
      >
        {/* 视频播放器 */}
        <Box
          as="video"
          src="https://s3-figma-videos-production-sig.figma.com/video/205500934632290305/TEAM/0903/ae6b/-c34c-4f8d-aa0b-a6540ddbaa08?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsiTVEHUHR0j6gnFB43rNl9YhraQpujedLjEj1553d364vvnoYwMGCGs1w5cjsAaoV4YRpj0ogljywlDgLDlAFmdEHmTsmdik7aKC7LrHmh8x3-6TCgkf6DvK4ODDqauqGguhoGRDYHs9-0fJ8x5jSovPVI4pEDpbbhqGGPL02aeRuums-6aWZn81HLk-LbE3snVtFmhDgntFAqALSZ4M3R18FRjYLLQ5icdZpcl3vxh4xPJ4uKaxlZAZCSXYJXj0w1x2Qrn7JtQXK9-ch4PDCNxxzi8qtiCtF5eqjyG1nQdN2IIasEHWj7dvj~7T5f3S6xSd2Tk4FZZvrRF-on3Lw__"
          controls
          autoPlay={isPlaying}
          width="484px"
          height="252px"
          position="relative"
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
      <Button  /*book按鈕*/
        display="flex"
        width="288px"
        height="40px"
        padding="12px 24px"
        justify-content="center"
        align-items="center"
        flex-shrink="0"
        border-radius="4px"
        background="#8973E9"
        textColor="white"
        _hover={{
          backgroundColor: "var(--Primary-300, #7156E5)", // 滑鼠懸停的背景色
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // 陰影
        }}
        marginTop="20px"
      >
        Book a free trial
      </Button>
    </Flex>
  );
}

function WhyBaodaoTalk() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const text = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize in providing high-quality lessons and resources to help you master Taiwanese Chinese. Our experienced instructors offer personalized guidance and engaging learning materials to make your language journey effective and enjoyable."
  const previewText = "Want to learn Taiwanese Chinese? BaoDao Talk is the right place for you! We specialize... "
  // 根據狀態確定顯示的文字
  const displayedText = isExpanded ? text : previewText
  return (
    <Flex
      direction="column"
      padding="14px 16px"
      gap="16px"
      width="100%"
      height="454px"
    >
      <Box>
        <Text

          width="198px"
          paddingBottom="24px"
          paddingTop="32px"
          color="var(--Grey-100, #313030)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" /* 150% */
        >
          Why BaoDao Talk?
        </Text>
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
              {displayedText}

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
          <Box
            width="83px"
            height="8px"
            flex-shrink="0"
            padding="16px 85px"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
              <rect width="48" height="8" rx="4" fill="#7156E5" />
              <rect x="52" width="8" height="8" rx="4" fill="#ADACAC" />
              <rect x="64" width="8" height="8" rx="4" fill="#ADACAC" />
              <rect x="75" width="8" height="8" rx="4" fill="#ADACAC" />
            </svg>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

function Testimonials() {
  return (
    <Flex
      width="320px"
      height="506px"
      background="var(--Grey-100, #313030)"
      direction="column"
    >
      <Box>
        <Text
          color="var(--Primary-200, #8973E9)"
          fontFamily={poppins.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px" /* 175% */
          paddingLeft="16px"
          paddingTop="33px"
        >
          TESTIMONIALS
        </Text>
        <Text
          width="288px"
          color="var(--White--Background, #FFF)"
          fontFamily={poppins.style.fontFamily}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" /* 150% */
          paddingLeft="16px"
        >
          What our students say about us
        </Text>

        <Flex
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
        <Box
          width="83px"
          height="8px"
          flex-shrink="0"
          padding="16px 85px"
          paddingLeft="119px"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="83" height="8" viewBox="0 0 83 8" fill="none">
            <rect width="48" height="8" rx="4" fill="#7156E5" />
            <rect x="52" width="8" height="8" rx="4" fill="#ADACAC" />
            <rect x="64" width="8" height="8" rx="4" fill="#ADACAC" />
            <rect x="75" width="8" height="8" rx="4" fill="#ADACAC" />
          </svg>
        </Box>
      </Box>
    </Flex>
  )
}
function LearnChinese() {
  return (
    <Flex
      width="320px"
      height="268px"
      direction="column"
      paddingLeft="16px"
      paddingTop="32px"
    >
      <Box>
        <Text
          color="var(--Primary-300, #7156E5)"
          fontFamily={poppins.style.fontFamily}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px" // 175%
          textTransform="uppercase"
        >
          Learn Once, Remember Forever
        </Text>

        <Text
          width="288px"
          height="60px"
          fontFamily={poppins.style.fontFamily}
          color="var(--Grey-100, #313030)"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="30px" // 150%
        >
          Exclusive teaching & learning materials
        </Text>

        <Flex
          marginTop="24px"
          width="288px"
          height="48px"
          padding="10px 78px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          display="flex"
          border-radius="4px"
          background="#E2D4F4"
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
          marginTop="22px"
          width="288px"
          height="48px"
          padding="10px 55px"
          justifyContent="center"
          alignItems="center"
          flexShrink="0"
          display="flex"
          border-radius="4px"
          background="var(--Grey-10, #F5F6F9)"
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
      </Box>
    </Flex>
  )
}

function BaodaoSeries() {
  return (
    <Flex
      width="320px"
      height="645px"
      direction="column"
      paddingLeft="16px"
      paddingTop="24px"
      background="#E2D4F4"
    >
      <Flex
        direction="column"
        paddingTop="24px"
        width="288px"
        height="364px"
        flex-shrink="0"
        border-radius="4px"
        background="var(--White--Background, #FFF)"
        position="relative"
      >
        <Text
          paddingLeft="12px"
          fontFamily={poppins.style.fontFamily}
          color="var(--Grey-100, #313030)"
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="28px" // 155.556%
          position="relative" // 相对定位以允许绝对定位的高亮显示在下方
          zIndex="1"
        >
          BaoDao series
          <Box
            position="absolute"
            width="132px"
            height="7px"
            flex-shrink="0"
            top="19px"
            zIndex="-1"
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="15" viewBox="0 0 135 15" fill="none">
              <path d="M1 6.20212C18.0604 4.79099 80.1601 2.04644 131 6.20213C104.61 6.20213 70.2256 6.62234 48.0866 11" stroke="#E2D4F4" stroke-width="8" stroke-linejoin="round" />
            </svg>
          </Box>
        </Text>

        <Box>
          <Text
            paddingTop="12px"
            paddingLeft="12px"
            width="261px"
            color="var(--Grey-100, #313030)"
            fontFamily={roboto.style.fontFamily}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px" // 150%
          >
            Our teaching materials are in Traditional Chinese, focusing on Taiwanese life and culture. The course includes various exercises and practical example sentences. Designed in a spiral structure, it continually revisits, deepens, and expands learned content while integrating new and old material.
          </Text>
        </Box>

        <Box
          paddingTop="20px"
          paddingLeft="12px"
          paddingBottom="20px"
          width="261px"
          height="0px"
          flexShrink="0"
          stroke-width="1px"
          stroke="var(--Grey-100, #313030)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="261" height="2" viewBox="0 0 261 2" fill="none">
            <path d="M0 1H261" stroke="#313030" />
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
              width="229px"
              color="var(--Grey-100, #313030)"
              fontFamily={roboto.style.fontFamily}
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="22px"
            >
              Ideal for beginners and basic level learners
            </Text>
          </Box>
        </Flex>

        
        <Flex
          position="relative"
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop
            style={{
              width: '288px',
              height: '189px',
            }}
          >
          <SwiperSlide>
          <Image
            paddingTop="48px"
            width="288px"
            height="189px"
            flexShrink={0}
            borderRadius="4px"
            src=" https://static-prod-baodao.s3.amazonaws.com/bread.png "
            boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
            objectFit="cover"
          />
          </SwiperSlide>
            {/* 添加更多 SwiperSlide */}
            <SwiperSlide>
              <Image
                width="288px"
                height="189px"
                borderRadius="4px"
                src="https://example.com/another-image.jpg"
                boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.15)"
                objectFit="cover"
              />
            </SwiperSlide>

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
              5/11
            </Text>

          </Box>
        </Flex>
        <Box
          width="83px"
          height="8px"
          flex-shrink="0"
          padding="16px 85px"
          paddingLeft="119px"
          paddingBottom="24px"
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
  )
}

function Compare(){
  return(
    <Flex

    >

    </Flex>
  )
}
export default function App() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="0"
      //gap="32px"
      width="100%"
      minHeight="100vh"
      background="#F5F5F5"
    >
      <Home />
      <Introduction />
      <Video />
      <WhyBaodaoTalk />
      <Testimonials />
      <LearnChinese />
      <BaodaoSeries />
      <Compare />
    </Flex>
  );
}
