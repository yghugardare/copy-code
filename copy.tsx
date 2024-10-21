<motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Small Section Below Header */}
      <div className="relative my-[7%] mb-[80px] max-h-screen md:mb-[180px]">
        {/* Left Grid  */}
        <img
          src="images/tile.png"
          alt="tile-image-left"
          className="absolute -top-[12%] left-[0%] -z-10 h-[136px] w-[211px] md:-top-[30%] md:left-[0%] md:h-[262px] md:w-[410px]"
        />
        {/* right grid */}
        <img
          src="images/tile-2.png"
          alt="tile-image-right"
          className="absolute -bottom-[6%] -right-[0%] -z-10 h-[136px] w-[211px] md:-bottom-[48%] md:right-[0%] md:h-[262px] md:w-[410px] md:rotate-0"
        />
        {/* text content */}

        <div className="mt:[36px] mx-[24px] mb-[30px] flex min-h-[250px] flex-col gap-[16px] md:mx-auto md:mb-[26px] md:mt-0 md:min-h-[214px] md:max-w-[1129px] md:gap-[24px]">
          <h1 className="text-display text-balance font-medium md:text-center">
            Transform Your Finance Journey with our{' '}
            <div className="text-primary inline">Professional</div> Tools
          </h1>
          <p className="text-large mr-[16px] text-pretty font-normal text-neutral-700 md:mr-0 md:text-center">
            Unlock data-driven insights and expert guidance to accelerate your
            finance career and achieve your goals.
          </p>
        </div>
        <div className="mx-[24px] flex md:mx-0 md:justify-center">
          <button
            onClick={scrollDown}
            className="text-medium bg-primary hover:bg-primary/90  w-full rounded-[8px] border-2 !px-[24px] py-[16px] font-medium text-white duration-300 ease-in-out  md:w-fit md:py-[10px]"
          >
            Explore our tools
          </button>
        </div>
      </div>
      {/* AI Bot */}
      <div className="mb-[96px] md:mb-[160.45px]" ref={toolsSectionRef}>
        <div className="flex flex-col flex-wrap items-center gap-y-[28px] md:flex-row md:justify-center md:gap-[84px] 2xl:mx-[80px]">
          {/* Left Side: Image temporarily*/}
          <div className="relative grid h-[273px] w-full cursor-pointer place-content-center bg-[url('images/ai.png')] bg-cover bg-center md:h-[484.55px] md:w-[613px] 2xl:w-[720px] 2xl:h-[570px]"></div>

          {/* Right Side: Text and Button */}
          <div className="mx-[24px] flex flex-col gap-[12px] md:mx-0 md:max-w-[450px] md:gap-[16px]">
            <h2 className="text-h3 font-medium text-neutral-800">
              AI Interview Bot
            </h2>
            <p className="text-medium font-normal text-neutral-700 md:mb-6 md:text-pretty">
              Simulate real finance interviews with our AI bot and receive
              detailed feedback on your answers to help you improve.
            </p>
            <Link
              to="/interview-bot"
              className="text-small bg-primary-600 hover:bg-primary/90 mt-[8px] self-start rounded-[8px] border-2 px-[20px] py-[12px] font-medium text-white duration-300 ease-in-out md:mt-0"
            >
              View tool
            </Link>
          </div>
        </div>
      </div>
      {/* Resume Optimizer */}
      <div className="font-neue-montreal mb-[96px] md:mb-[160.45px]">
        <div className="flex flex-col flex-wrap items-center gap-y-[28px]  md:flex-row md:justify-center md:gap-[84px] 2xl:mx-[80px]">
          {/* Left Side: Image temporarily*/}
          <div className="relative grid h-[273px] w-full cursor-pointer place-content-center bg-[url('images/resume.png')] bg-cover bg-center md:h-[484.55px] md:w-[613px] 2xl:w-[720px] 2xl:h-[570px]"></div>

          {/* Right Side: Text and Button */}
          <div className="mx-[24px] flex flex-col gap-[12px] md:mx-0 md:max-w-[450px] md:gap-[16px]">
            <h2 className="text-h3 font-medium text-neutral-800">
              Resume Optimizer
            </h2>
            <p className="text-medium text-pretty font-normal text-neutral-700 md:mb-6 md:text-balance">
              Enhance your resume&apos;s impact with personalized insights and
              expert-driven suggestions.
            </p>
            <Link
              to="/new-resume-scorer"
              className="text-small bg-primary-600 hover:bg-primary/90 mt-[8px] self-start rounded-[8px] border-2 px-[20px] py-[12px] font-medium text-white duration-300 ease-in-out md:mt-0"
            >
              View tool
            </Link>
          </div>
        </div>
      </div>
      {/* More Tools */}
      <div className="relative mb-[120.95px]  flex flex-col flex-wrap gap-y-[56px] overflow-hidden md:mx-[70px] 2xl:ml-[160px] md:mb-[160.45px] md:gap-y-[60px]">
        {/* right side tile */}
        <img
          src="images/tile-2.png"
          alt="tile-image-right"
          className="absolute -bottom-[0] right-[0%] top-[100%] z-10 h-[262px] w-[410px]"
        />
        <h2 className="text-h2 ml-[24px] font-medium text-black md:ml-0">
          More Tools
        </h2>
        {/* tools in flex */}
        <div className="flex flex-col gap-y-[80px] md:flex-row md:items-center md:gap-x-[110px] 2xl:gap-[240px] md:gap-y-0 ">
          {/* Article Ship Scorer */}
          <div className="flex flex-col gap-[28px] md:min-h-[549px] md:max-w-[508px] md:gap-[40px]">
            <div className="mx-[24px] h-[300px] cursor-pointer rounded-[8px] bg-[url('/images/articleship.png')] bg-cover bg-center md:mx-0 md:h-[359px] md:w-[508px] 2xl:w-[580px] 2xl:h-[452px] md:border"></div>
            {/* text  */}
            <div className="mx-[24px] flex flex-col justify-center gap-[12px] md:mx-0 md:gap-[28px] md:px-[16px]">
              <h1 className="text-h4 font-medium text-neutral-800">
                Articleship Scorer
              </h1>
              <p className="text-medium text-balance font-normal text-neutral-700">
                Find out where you stand and get tailored advice to increase
                your chances of landing a BIG4 articleship.
              </p>
              <Link
                to="/articleship-scorer"
                className="bg-primary-600 text-small hover:bg-primary/90 mt-[8px] self-start rounded-[8px] border-[1.5px] px-[20px] py-[12px] font-medium text-white transition-all duration-300 ease-in-out md:mt-0"
              >
                View tool
              </Link>
            </div>
          </div>
          {/* Salary Estimator */}
          <div className="flex flex-col gap-[28px] md:min-h-[549px] md:max-w-[508px] md:gap-[40px]">
            <div className="mx-[24px] h-[300px] cursor-pointer 2xl:w-[580px] 2xl:h-[452px]  rounded-[8px] bg-[url('/images/salary-estimator.png')] bg-cover bg-center md:mx-0 md:h-[359px] md:w-[508px] md:border"></div>
            {/* text  */}
            <div className="mx-[24px] flex flex-col justify-center gap-[12px] md:mx-0 md:gap-[28px] md:px-[16px]">
              <h1 className="text-h4 font-medium text-neutral-800">
                Salary Estimator
              </h1>
              <p className="text-medium text-pretty font-normal text-neutral-700">
                See what your finance skills are worth in the market and
                benchmark your salary expectations.
              </p>
              <Link
                to="/salary-estimator"
                className="bg-primary-600 text-small  mt-[8px] self-start rounded-[8px] border-[1.5px] px-[20px] py-[12px] font-medium text-white transition-all duration-300 ease-in-out hover:bg-primary/90 md:mt-0"
              >
                View tool
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback in Bento Grid */}
      <div className="font-neue-montreal mx-[24px] mb-[116px] flex flex-col flex-wrap md:mx-[70px]  2xl:mx-[160px] md:mb-[160.45px] md:gap-y-[60px]">
        <div className="text-h2 font-medium text-black">
          What our users say &nbsp;
          <div className="text-h2 font-medium text-black">about us...</div>
        </div>
        {/* Feedback */}
        <div className="mt-[56px] hidden grid-cols-1 gap-[12px] md:mx-[0px] md:mt-0 md:grid md:grid-cols-2 md:gap-[20px]">
          {feedBacks.map((feedback, i) => (
            <div
              key={i}
              className={`inline-grid cursor-pointer grid-cols-1 gap-[40px] rounded-[24px] bg-neutral-100 p-[40px] hover:bg-gradient-to-br md:gap-[56px] ${i === 2 && 'md:row-span-3'} ${i === 1 && 'md:row-span-2'}`}
            >
              <p className="text-normal 2xl:text-medium font-normal text-neutral-800 2xl:text-balance">
                {feedback.feedback}
              </p>
              <div className="flex items-center gap-[8px]">
                <Avatar className="h-[48px] w-[48px] cursor-pointer">
                  <AvatarImage src={feedback.avatar} alt={feedback.name} />
                  <AvatarFallback>{feedback.name}</AvatarFallback>
                </Avatar>
                <p className="text-normal 2xl:text-medium font-[600] text-neutral-900">
                  {feedback.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile Feedback */}
        <MobileFeedbackSlider
          feedBacks={feedBacks}
          dragThreshold={dragThreshold}
          intervalTime={intervalTime}
          autoSlide={autoSlide}
        />
      </div>
    </motion.section>
