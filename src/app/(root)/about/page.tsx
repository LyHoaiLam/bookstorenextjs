import IconAngularJS from "@/assets/icons/logo/outlline/IconAngularJS";
import IconAntDesign from "@/assets/icons/logo/outlline/IconAntDesign";
import IconBitbuckit from "@/assets/icons/logo/outlline/IconBitbuckit";
import IconBootStrap from "@/assets/icons/logo/outlline/IconBootStrap";
import IconCSharp from "@/assets/icons/logo/outlline/IconCSharp";
import IconCss from "@/assets/icons/logo/outlline/IconCss";
import IconDjango from "@/assets/icons/logo/outlline/IconDjango";
import IconFigma from "@/assets/icons/logo/outlline/IconFigma";
import IconGit from "@/assets/icons/logo/outlline/IconGit";
import IconGithub from "@/assets/icons/logo/outlline/IconGithub";
import IconGitlab from "@/assets/icons/logo/outlline/IconGitlab";
import IconHTML from "@/assets/icons/logo/outlline/IconHTML";
import IconJava from "@/assets/icons/logo/outlline/IconJava";
import IconJavaScript from "@/assets/icons/logo/outlline/IconJavaScript";
import IconMaterial from "@/assets/icons/logo/outlline/IconMaterial";
import IconNetCore from "@/assets/icons/logo/outlline/IconNetCore";
import IconNextJS from "@/assets/icons/logo/outlline/IconNextJS";
import IconNgrok from "@/assets/icons/logo/outlline/IconNgrok";
import IconNpm from "@/assets/icons/logo/outlline/IconNpm";
import IconPhotoshop from "@/assets/icons/logo/outlline/IconPhotoshop";
import IconPostman from "@/assets/icons/logo/outlline/IconPostman";
import IconPython from "@/assets/icons/logo/outlline/IconPython";
import IconReactBootStrap from "@/assets/icons/logo/outlline/IconReactBootStrap";
import IconReactJS from "@/assets/icons/logo/outlline/IconReactJS";
import IconRedux from "@/assets/icons/logo/outlline/IconRedux";
import IconScss from "@/assets/icons/logo/outlline/IconScss";
import IconShadcn from "@/assets/icons/logo/outlline/IconShadcn";
import IconSQLServer from "@/assets/icons/logo/outlline/IconSQLServer";
import IconSwagger from "@/assets/icons/logo/outlline/IconSwagger";
import IconTailwindCss from "@/assets/icons/logo/outlline/IconTailwindCss";
import IconTomcat from "@/assets/icons/logo/outlline/IconTomcat";
import IconTypeScript from "@/assets/icons/logo/outlline/IconTypeScript";
import IconVueJS from "@/assets/icons/logo/outlline/IconVueJS";
import IconXampp from "@/assets/icons/logo/outlline/IconXampp";
import IconYarn from "@/assets/icons/logo/outlline/IconYarn";
import IconZod from "@/assets/icons/logo/outlline/IconZod";
import IconFacebook from "@/assets/icons/logo/outlline/Social/IconFacebook";
import IconLinkedin from "@/assets/icons/logo/outlline/Social/IconLinkedin";
import IconTiktok from "@/assets/icons/logo/outlline/Social/IconTiktok";
import SpinningLinkedinCard from "@/components/components/common/Animations/SpinningLinkedinCard";

export default function Page() {
    return (
        <>
        <div>About Travel LHL Tính năng đang trong giai đoạn phát triển</div>
        <video src="videos/video.mp4" controls preload="metadata"
            style={{width: '100%',  maxWidth: '720px', maxHeight: '720px', borderRadius: '12px ', boxShadow: '0 4px 12px rgba(0,0,0,0.3)'}}
        >
        </video>

        <div className="flex justify-center gap-12">
            <div>
                <h1>Framework</h1>
                    <IconAngularJS />
                    <IconVueJS />
                    <IconReactJS />
                    <IconNextJS />
                    <IconDjango />
                    <IconNetCore />
            </div>

            <div>
                <h1>Language Programming</h1>
                <IconJavaScript />
                <IconTypeScript />
                <IconPython />
                <IconJava />
                <IconCSharp />
                <IconSQLServer />
                <IconHTML />
                <IconCss />
            </div>

             <div>
                <h1>Source management</h1>
                <IconGithub />
                <IconGitlab />
                <IconBitbuckit />
            </div>

            <div>
                <h1>Libary UI</h1>
                <IconBootStrap />
                <IconAntDesign />
                <IconMaterial />
                <IconShadcn />
                <IconReactBootStrap />
                <IconScss />
                <IconTailwindCss />
            </div>

            <div>
                <h1>Test API</h1>
                <IconSwagger />
                <IconPostman />
            </div>
        
            <div>
                <h1>Orther</h1>
                <p>Object-Oriented Programming (OOP) thinking</p>
                <p>Data Structures & Algorithms</p>
                <p>Design Pattern</p>
                <p>Java Server Page</p>
                <IconTomcat />
                <IconNpm />
                <IconYarn />
                <IconPhotoshop />
                <IconFigma />
                <IconRedux />
                <IconZod />
                <IconXampp />
                <IconNgrok />
                <IconGit />
                <p>Office 365</p>
                <p>zustand</p>
                <p>react-hook-form</p>
                <p>Read and write English documents</p>
                <p>Basis english communication</p>
                <p>Teamwork skills</p>
                <p>Independent working skills</p>
                <p>Problem solving skills</p>
            </div>


            <div>
                <h1>My Information</h1>
                <SpinningLinkedinCard
                    title="Facebook"
                    link="https://www.facebook.com/hoai.lam.754656/"
                    component={<IconFacebook />}
                />
                <SpinningLinkedinCard
                    title="LinkedIn"
                    link="https://www.linkedin.com/in/l%C3%A2m-ho%C3%A0i-70326b309/"
                    component={<IconTiktok />}
                />
                <SpinningLinkedinCard
                    title="Tiktok"
                    link="https://www.tiktok.com/@hoailam03999"
                    component={<IconLinkedin />}
                />
            </div>
        </div>

d



        </>
    )
}