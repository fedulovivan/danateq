var gulp = require('gulp'),
	util = require('util'),
	debug = require('gulp-debug'),
	del = require('del'),
	_ = require('lodash');

var appsPath = '/home/johnny/Desktop/Projects',
	soapGenPath = '/home/johnny/Desktop/EclipseWorkspaces/generate_soap/bar',
	wsdlPath = '/WebContent/WEB-INF/wsdl';

/** copy auto generation outcome to target applications */
gulp.task('cptoepc', function() {
    gulp.src(_.map(
		['services.xml', 'EpcHttpService.wsdl'], 
		function (filename) {
			return util.format(
		    	'%s/WebContent/WEB-INF/services/EpcHttpService/META-INF/%s',
		    	soapGenPath,
		    	filename
	    	);
		}
	))
	.pipe(debug())
    .pipe(gulp.dest(util.format(
		'%s/EnterpriseProductCatalogue/WebContent/WEB-INF/services/EpcHttpService/META-INF/',
		appsPath
	)));
	_.each(['EnterpriseProductCatalogue', 'LinkWorkbench'], function(targetApp) {
		gulp.src(util.format(
			'%s%s/EnterpriseProductCatalogue.wsdl',
			soapGenPath,
			wsdlPath
		))
		.pipe(debug())
		.pipe(gulp.dest(util.format(
			'%s/%s%s/',
			appsPath,
			targetApp,
			wsdlPath
		)));
	});
    gulp.src(_.map(
		['EpcHttpServiceStub.java', 'EpcHttpServiceCallbackHandler.java'], 
		function (filename) {
			return util.format(
		    	'%s/src/com/danateq/soap/client/%s',
		    	soapGenPath,
		    	filename
	    	);
		}
	))
	.pipe(debug())
    .pipe(gulp.dest(util.format(
		'%s/LinkWorkbench/src/com/danateq/soap/client/',
		appsPath
	)));
});

/* purge auto generated files from local project */
gulp.task('clean', function() {
	return del([
		util.format(
			'%s%s/*.wsdl',
			soapGenPath,
			wsdlPath
 		),
 		util.format(
 			'%s/src/com/danateq',
 			soapGenPath
		),
		util.format(
 			'%s/build/classes/com/danateq',
 			soapGenPath
		),
		util.format(
			'%s/resources/*',
			soapGenPath
 		),
 		util.format(
 			'%s/WebContent/WEB-INF/services',
 			soapGenPath
		)
	]);
});

gulp.task('cpfrom', function() {
	_.each([
		'EnterpriseProductCatalogue', 
		'UnifiedCustomerProfile', 
		'UserManagement', 
		'TaskManagement',
		'OrderManagement'
	], function(targetApp) {
		gulp.src(util.format(
			'%s/%s%s/%s.wsdl',
			appsPath,
			targetApp,
			wsdlPath,
			targetApp
		))
		.pipe(debug())
		.pipe(gulp.dest(util.format(
			'%s%s',
			soapGenPath,
			wsdlPath
		)));
	});
});