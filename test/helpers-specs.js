import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';
import { getAndroidPlatformAndPath, assertZipArchive } from '../lib/helpers.js';
import path from 'path';

const should = chai.should();
chai.use(chaiAsPromised);

describe('Helpers', () => {
  it('getAndroidPlatformAndPath', async () => {
    let android_home = process.env.ANDROID_HOME;
    // temp setting android_home to null.
    process.env.ANDROID_HOME = null;
    let result = await getAndroidPlatformAndPath();
    should.not.exist(result);
    // resetting ANDROID_HOME
    process.env.ANDROID_HOME = android_home;
  });

  it('should return platform and path for android', async () => {
    let {platform, platformPath} = await getAndroidPlatformAndPath();
    platform.should.exist;
    platformPath.should.exist;
  });

  it('should assert zip existing', async () => {
    // Find a way to get absolute path
    let apkPath = path.resolve(__dirname, '..', '..', 'test','ContactManager.apk');
    await assertZipArchive(apkPath);
  });

});