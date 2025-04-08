import express from 'express';
import homeRoutes from './homeRoutes.js';
import dashboardRoutes from './dashboardRoutes.js';
import StartRoutes from './startRoutes.js';
import SessionsRoutes from './publicsessionsRoutes.js';
import MySessionsRoutes from './mysessionsRoutes.js';
import RankingRoutes from './rankingRoutes.js';
import ProfileRoutes from './profileRoutes.js';
import LoginRoutes from './loginRoutes.js';
import SignUpRoutes from './signupRoutes.js';
import FAQRoutes from './faqRoutes.js';
import WhyChooseUsRoutes from './chooseRoutes.js';
import formRoutes from './formRoutes.js';  
import errorRoutes from './404Routes.js';

const router = express.Router();

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/brainstorming", StartRoutes);
router.use("/brainstorming/Level1", StartRoutes);
router.use("/mysessions", SessionsRoutes);
router.use("/sessions", MySessionsRoutes);
router.use("/login", LoginRoutes);
router.use("/signup", SignUpRoutes);
router.use("/ranking", RankingRoutes);
router.use("/profile", ProfileRoutes);
router.use("/faq", FAQRoutes);
router.use("/whychooseus", WhyChooseUsRoutes);
router.use("/form", formRoutes);

router.use("*", errorRoutes); 

export default router;
