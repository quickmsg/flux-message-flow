import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Terminal, 
  Container, 
  Server, 
  Copy, 
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Package
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const QuickStart = () => {
  const { t } = useTranslation();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const installationMethods = [
    {
      id: "docker",
      title: t('quickstart.docker.title'),
      description: t('quickstart.docker.desc'),
      icon: Container,
      command: `# 拉取FluxMQ镜像
docker pull fluxmq/enterprise:2.0.18

# 启动FluxMQ容器
docker run -it -d \\
  -v /app/logs:/app/logs \\
  -p 8080:8080 \\
  -p 1883:1883 \\
  -p 8883:8883 \\
  fluxmq/enterprise:2.0.18`,
      steps: [
        t('quickstart.docker.pull'),
        t('quickstart.docker.run'),
        t('quickstart.docker.ports'),
        t('quickstart.docker.management')
      ],
      managementUrl: "http://localhost:8080"
    },
    {
      id: "linux",
      title: t('quickstart.linux.title'),
      description: t('quickstart.linux.desc'),
      icon: Terminal,
      command: `# 下载安装包
wget https://fluxmq.obs.cn-east-3.myhuaweicloud.com/fluxmq-2.0.18-linux.zip

# 解压
unzip fluxmq-2.0.18-linux.zip
cd fluxmq-2.0.18-linux

# 设置可执行权限
sh add-executable-permission.sh

# 启动服务
./fluxmq.sh`,
      steps: [
        t('quickstart.linux.download'),
        t('quickstart.linux.permission'),
        t('quickstart.linux.start'),
        t('quickstart.docker.management')
      ],
      managementUrl: "http://localhost:8080"
    },
    {
      id: "windows",
      title: t('quickstart.windows.title'),
      description: t('quickstart.windows.desc'),
      icon: Package,
      command: `# 下载Windows安装包
# 访问: https://fluxmq.obs.cn-east-3.myhuaweicloud.com/fluxmq-2.0.18-win.zip

# 解压到目标目录
# 双击运行 fluxmq.sh`,
      steps: [
        t('quickstart.windows.download'),
        t('quickstart.windows.start'),
        t('quickstart.docker.management')
      ],
      managementUrl: "http://localhost:8080"
    },
    {
      id: "macos",
      title: t('quickstart.macos.title'),
      description: t('quickstart.macos.desc'),
      icon: Package,
      command: `# 下载macOS安装包
wget https://fluxmq.obs.cn-east-3.myhuaweicloud.com/fluxmq-2.0.18-mac.zip

# 解压
unzip fluxmq-2.0.18-mac.zip
cd fluxmq-2.0.18-mac

# 设置可执行权限
sh add-executable-permission.sh

# 启动服务
./fluxmq.sh`,
      steps: [
        t('quickstart.macos.download'),
        t('quickstart.macos.permission'),
        t('quickstart.macos.start'),
        t('quickstart.docker.management')
      ],
      managementUrl: "http://localhost:8080"
    },
    {
      id: "k8s",
      title: t('quickstart.k8s.title'),
      description: t('quickstart.k8s.desc'),
      icon: Server,
      command: `# 创建RBAC资源
kubectl apply -f rbac.yaml

# 创建ConfigMap
kubectl apply -f configmap.yaml

# 创建Deployment
kubectl apply -f deployment.yaml

# 创建Service
kubectl apply -f service.yaml

# 检查部署状态
kubectl get pods -l app=fluxmq`,
      steps: [
        t('quickstart.k8s.rbac'),
        t('quickstart.k8s.configmap'),
        t('quickstart.k8s.deployment'),
        t('quickstart.k8s.service')
      ],
      managementUrl: "http://localhost:8080"
    }
  ];

  const quickTestSteps = [
    {
      step: 1,
      title: t('quickstart.test.connect.title'),
      description: t('quickstart.test.connect.desc'),
      command: "# 使用MQTT客户端连接\n# 服务器: localhost\n# 端口: 1883\n# 用户名: fluxmq\n# 密码: fluxmq"
    },
    {
      step: 2,
      title: t('quickstart.test.publish.title'),
      description: t('quickstart.test.publish.desc'),
      command: "# 发布消息到测试主题\n# 主题: test/topic\n# 消息: Hello FluxMQ\n# QoS: 0"
    },
    {
      step: 3,
      title: t('quickstart.test.subscribe.title'),
      description: t('quickstart.test.subscribe.desc'),
      command: "# 订阅测试主题\n# 主题: test/topic\n# QoS: 0"
    },
    {
      step: 4,
      title: t('quickstart.test.webui.title'),
      description: t('quickstart.test.webui.desc'),
      command: "http://localhost:8080"
    }
  ];

  return (
    <section id="quickstart" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('getStarted.title')}
            <span className="text-gradient block">{t('getStarted.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('getStarted.subtitle')}
          </p>
        </div>

        {/* Installation Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('quickstart.installation.title')}</h3>
          <Tabs defaultValue="docker" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {installationMethods.map((method) => (
                <TabsTrigger key={method.id} value={method.id} className="flex items-center gap-2">
                  <method.icon className="h-4 w-4" />
                  {method.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {installationMethods.map((method) => (
              <TabsContent key={method.id} value={method.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                          <method.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{method.title}</CardTitle>
                          <CardDescription>{method.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {method.steps.map((step, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-card border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Terminal className="h-5 w-5" />
                          {t('quickstart.commands.title')}
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(method.command, method.id)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedCode === method.id ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                        <pre className="whitespace-pre-wrap text-primary">{method.command}</pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* License Information */}
        <div className="mb-16">
          <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('quickstart.license.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <div className="text-left">
                  <div className="font-semibold text-green-600">{t('quickstart.license.free')}</div>
                  <div className="text-sm text-muted-foreground">Perfect for development and testing</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <div className="text-left">
                  <div className="font-semibold text-blue-600">{t('quickstart.license.commercial')}</div>
                  <div className="text-sm text-muted-foreground">For production environments</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Test */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">{t('quickstart.test.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTestSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-glow group-hover:animate-glow">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg group-hover:text-gradient transition-all duration-300">
                      {step.title}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-secondary/50 rounded-lg p-3 font-mono text-sm overflow-x-auto">
                    <code className="text-primary">{step.command}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="p-4 bg-gradient-primary rounded-full w-fit mx-auto mb-6 shadow-glow">
              <Download className="h-12 w-12 text-primary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              {t('quickstart.cta.title')}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('quickstart.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="lg" className="group">
                <Download className="h-5 w-5 mr-2" />
                {t('quickstart.cta.download')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="group">
                <Code className="h-5 w-5 mr-2" />
                {t('quickstart.cta.source')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="h-5 w-5 mr-2" />
                {t('quickstart.cta.demo')}
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('quickstart.cta.opensource')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('quickstart.cta.enterprise')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                {t('quickstart.cta.community')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
