
  Pod::Spec.new do |s|
    s.name = 'CapMathCalci'
    s.version = '0.0.1'
    s.summary = 'Math Calculator Capacitor Plugin'
    s.license = ''
    s.homepage = 'https://github.com/balramkola/MathCalciCapacitorPlugin.git'
    s.author = 'Balram'
    s.source = { :git => 'https://github.com/balramkola/MathCalciCapacitorPlugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end