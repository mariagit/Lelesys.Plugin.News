<?php

namespace Lelesys\Plugin\News\Controller;

/* *
 * This script belongs to the TYPO3 Flow package "Lelesys.Plugin.News".   *
 *                                                                        *
 *                                                                        */

use TYPO3\Flow\Annotations as Flow;
use TYPO3\Flow\Mvc\Controller\ActionController;
use Lelesys\Plugin\News\Domain\Model\Folder;

class FolderController extends ActionController {

	/**
	 * @Flow\Inject
	 * @var \TYPO3\Flow\I18n\Translator
	 */
	protected $translator;

	/**
	 * @Flow\Inject
	 * @var \Lelesys\Plugin\News\Domain\Service\FolderService
	 */
	protected $folderService;

	/**
	 * List of folders
	 *
	 * @return void
	 */
	public function indexAction() {
		$pluginArguments = $this->request->getPluginArguments();
		if (isset($pluginArguments['itemsPerPage'])) {
			$itemsPerPage = (int) $pluginArguments['itemsPerPage'];
		} else {
			$itemsPerPage = '';
		}
		$this->view->assign('itemsPerPage', $itemsPerPage);
		$this->view->assign('folders', $this->folderService->listAll($pluginArguments));
	}

	/**
	 * @return void
	 */
	public function newAction() {

	}

	/**
	 * @param \Lelesys\Plugin\News\Domain\Model\Folder $newFolder
	 * @return void
	 */
	public function createAction(\Lelesys\Plugin\News\Domain\Model\Folder $newFolder) {
		$this->folderService->add($newFolder);
		$packageKey = $this->settings['flashMessage']['packageKey'];
		$header = 'Created a new folder.';
		$message = $this->translator->translateById('lelesys.plugin.news.add.folder', array(), NULL, NULL, 'Main', $packageKey);
		$this->addFlashMessage($message, $header, \TYPO3\Flow\Error\Message::SEVERITY_OK);
		$this->redirect('index');
	}

	/**
	 * @param \Lelesys\Plugin\News\Domain\Model\Folder $folder
	 * @return void
	 */
	public function editAction(\Lelesys\Plugin\News\Domain\Model\Folder $folder) {
		$this->view->assign('folder', $folder);
	}

	/**
	 * @param \Lelesys\Plugin\News\Domain\Model\Folder $folder
	 * @return void
	 */
	public function updateAction(\Lelesys\Plugin\News\Domain\Model\Folder $folder) {
		$this->folderService->update($folder);
		$packageKey = $this->settings['flashMessage']['packageKey'];
		$header = 'Updated the folder.';
		$message = $this->translator->translateById('lelesys.plugin.news.update.folder', array(), NULL, NULL, 'Main', $packageKey);
		$this->addFlashMessage($message, $header, \TYPO3\Flow\Error\Message::SEVERITY_OK);
		$this->redirect('index');
	}

	/**
	 * @param \Lelesys\Plugin\News\Domain\Model\Folder $folder
	 * @return void
	 */
	public function deleteAction(\Lelesys\Plugin\News\Domain\Model\Folder $folder) {
		$this->folderService->delete($folder);
		$packageKey = $this->settings['flashMessage']['packageKey'];
		$header = 'Deleted the folder.';
		$message = $this->translator->translateById('lelesys.plugin.news.delete.folder', array(), NULL, NULL, 'Main', $packageKey);
		$this->addFlashMessage($message, $header, \TYPO3\Flow\Error\Message::SEVERITY_OK);
		$this->redirect('index');
	}

}

?>