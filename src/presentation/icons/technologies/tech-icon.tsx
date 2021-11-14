import { memo } from 'react'
import * as Icons from '@/presentation/icons'
import { IconProps } from '@/presentation/protocols'

type Props = { name: string } & IconProps

function TechIcon({ name, ...props }: Props) {
	const iconEnum = {
		angular: <Icons.AngularIcon {...props} />,
		bootstrap: <Icons.BootstrapIcon {...props} />,
		c: <Icons.CIcon {...props} />,
		'chart-js': <Icons.ChartJsIcon {...props} />,
		docker: <Icons.DockerIcon {...props} />,
		express: <Icons.ExpressIcon color='#fff' {...props} />,
		java: <Icons.JavaIcon {...props} />,
		javascript: <Icons.JavascriptIcon {...props} />,
		kotlin: <Icons.KotlinIcon {...props} />,
		'material-ui': <Icons.MaterialUiIcon {...props} />,
		mongo: <Icons.MongoIcon {...props} />,
		'my-sql': <Icons.MySqlIcon {...props} />,
		nest: <Icons.NestIcon {...props} />,
		next: <Icons.NextIcon {...props} />,
		node: <Icons.NodeIcon {...props} />,
		'postgre-sql': <Icons.PostgreIcon {...props} />,
		react: <Icons.ReactIcon {...props} />,
		'react-native': <Icons.ReactIcon color='#6b52ae' {...props} />,
		redux: <Icons.ReduxIcon {...props} />,
		sass: <Icons.SassIcon {...props} />,
		spring: <Icons.SpringIcon {...props} />,
		strapi: <Icons.StrapiIcon {...props} />,
		swagger: <Icons.SwaggerIcon {...props} />,
		tailwind: <Icons.TailwindIcon {...props} />,
		typescript: <Icons.TypescriptIcon {...props} />,
		vue: <Icons.VueIcon {...props} />,
		'vue-material': <Icons.VueMaterialIcon {...props} />
	}

	return iconEnum[name] || <div />
}

export default memo(TechIcon)
